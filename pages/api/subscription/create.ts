import { NextApiRequest, NextApiResponse } from 'next'
import dayjs from 'dayjs'

import { WooCommerce } from '../WooCommerce'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const { customerId, stripeCustomerId, paymentMethod, billingAddress, shippingAddress, cart, shippingRate } = req.body

  const customerPayload = {
    payment_method: 'stripe',
    billing: billingAddress,
    shipping: {
      first_name: billingAddress.first_name,
      last_name: billingAddress.last_name,
      ...shippingAddress,
    },
  }

  cart.forEach(async (cartItem: string) => {
    const itemDetails = await WooCommerce.get(`products/${cartItem}`)
    if (itemDetails.data.type === 'subscription') {
      const billingInterval = itemDetails.data.meta_data.find((meta) => meta.key === '_subscription_period_interval')
      const subscription = await WooCommerce.post('subscriptions', {
        ...customerPayload,
        customer_id: customerId,
        paymentMethod: 'stripe',
        billing_period: 'year',
        billing_interval: parseInt(billingInterval.value),
        start_date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        next_payment_date: dayjs().add(parseInt(billingInterval.value), 'year').format('YYYY-MM-DD HH:mm:ss'),
        line_items: [{
          product_id: cartItem,
          quantity: 1,
        }],
        shipping_lines: [
          {
            method_id: shippingRate.id,
            method_title: shippingRate.title,
            total: `${shippingRate.cost}`
          }
        ],
      })

      res.status(subscription.status).json(subscription.data)
    }
  })
}
