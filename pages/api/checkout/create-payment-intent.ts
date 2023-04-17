import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

import type { Product } from '@typings/Product.types'

import { WooCommerce } from '../WooCommerce'

export default async function createPaymentIntent(req: NextApiRequest, res: NextApiResponse) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
  })

  const customer = await stripe.customers.create()

  const cart = req.body as string[]

  const getProductTotal = async () => {
    let amount = 0

    await Promise.all(
      cart.map(async (cartItem) => {
        const itemDetails: Product = await WooCommerce.get(`products/${cartItem}`)
        const subscriptionFee = itemDetails.data.meta_data.find((meta) => meta.key === '_subscription_sign_up_fee')
        if (subscriptionFee?.value) {
          amount = amount + parseFloat(subscriptionFee.value)
          return
        }

        amount = amount + parseFloat(itemDetails.data.price)
      }),
    )

    return amount
  }

  const total = await getProductTotal()

  if (total) {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      customer: customer.id,
      setup_future_usage: 'off_session',
      amount: Math.round(total * 100),
      currency: 'gbp',
      automatic_payment_methods: {
        enabled: true,
      },
    })

    res.send({
      id: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
    })
  }
}
