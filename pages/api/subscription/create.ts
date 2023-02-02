import { NextApiRequest, NextApiResponse } from 'next'
import dayjs from 'dayjs'

import { WooCommerce } from '../WooCommerce'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const { stripeCustomerId, paymentMethod, billingAddress, shippingAddress, cart } = req.body

  const wooCommerceData = await WooCommerce.post('subscriptions', {
    customer_id: 9275,
    status: 'active',
    billing_period: 'year',
    billing_interval: 1,
    start_date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    trial_end_date: dayjs().add(1, 'year').format('YYYY-MM-DD HH:mm:ss'),
    next_payment_date: dayjs().add(1, 'year').format('YYYY-MM-DD HH:mm:ss'),
    payment_method: 'stripe',
    payment_details: {
      post_meta: {
        _stripe_customer_id: stripeCustomerId,
        _stripe_source_id: paymentMethod,
      }
    },
    billing: billingAddress,
    shipping: {
      first_name: billingAddress.first_name,
      last_name: billingAddress.last_name,
      ...shippingAddress,
    },
    line_items: cart.map((cartItem: string) => {
      return {
        product_id: cartItem,
        quantity: 1,
      }
    })
  })

  if (wooCommerceData) {
    res.status(200).json(wooCommerceData.data)
    return
  }
}
