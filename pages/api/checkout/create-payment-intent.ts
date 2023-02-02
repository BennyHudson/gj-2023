/* eslint-disable @typescript-eslint/no-var-requires */
import { WooCommerce } from '../WooCommerce'

export default async function handler(req, res) {
  // This is your test secret API key.
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  const customer = await stripe.customers.create()

  const cart = req.body as string[]

  const getProductTotal = async () => {
    let amount = 0

    await Promise.all(cart.map(async (cartItem) => {
      const itemDetails = await WooCommerce.get(`products/${cartItem}`)
      const subscriptionFee = itemDetails.data.meta_data.find((meta) => meta.key === '_subscription_sign_up_fee')
      if (subscriptionFee) {
        amount = amount + parseInt(subscriptionFee.value)
        return
      }

      amount = amount + parseInt(itemDetails.data.price)
    }))

    return amount
  }

  const total = await getProductTotal()

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    customer: customer.id,
    setup_future_usage: 'off_session',
    amount: 30,
    currency: 'gbp',
    automatic_payment_methods: {
      enabled: true,
    },
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  }) 
};