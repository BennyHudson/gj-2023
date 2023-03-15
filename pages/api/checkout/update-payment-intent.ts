/* eslint-disable @typescript-eslint/no-var-requires */
import { NextApiRequest, NextApiResponse } from 'next'
import { WooCommerce } from '../WooCommerce'

export default async function updatePaymentIntent(req: NextApiRequest, res: NextApiResponse) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  const getProductTotal = async (): Promise<number> => {
    let amount = 0

    await Promise.all(
      req.body.cart.map(async (cartItem) => {
        const itemDetails = await WooCommerce.get(`products/${cartItem}`)
        const subscriptionFee = itemDetails.data.meta_data.find((meta) => meta.key === '_subscription_sign_up_fee')
        if (subscriptionFee) {
          amount = amount + parseFloat(subscriptionFee.value)
          return
        }

        amount = amount + parseFloat(itemDetails.data.price)
      }),
    )

    return amount
  }

  const voucherDiscount = (basketTotal: number): number => {
    const { voucher } = req.body.checkoutForm

    if (!voucher) return basketTotal

    if (voucher.discount_type === 'percent') {
      const percentageDiscount = Math.trunc(voucher.amount)
      return basketTotal - (basketTotal * (percentageDiscount / 100))
    }

    return basketTotal - parseFloat(voucher.amount)
  }

  let subTotal = await getProductTotal()

  subTotal = voucherDiscount(subTotal)

  const total = Math.round(((subTotal + req.body.shippingRate.cost + Number.EPSILON) * 100) / 100)

  await stripe.paymentIntents.update(req.body.paymentIntent, {
    amount: total * 100,
  })

  res.status(200)
}
