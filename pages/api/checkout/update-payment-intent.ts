/* eslint-disable @typescript-eslint/no-var-requires */
import { WooCommerce } from '../WooCommerce'

export default async function handler(req, res) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  const getProductTotal = async () => {
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

  const subTotal = await getProductTotal()

  const total = subTotal + req.body.shippingRate.cost

  await stripe.paymentIntents.update(req.body.paymentIntent, {
    amount: total * 100,
  })

  res.status(200)
}
