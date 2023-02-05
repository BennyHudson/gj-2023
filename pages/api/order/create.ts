import { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../WooCommerce'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const { billingAddress, shippingAddress, cart } = req.body

  console.log(req.body)

  const orderData = {
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
    }),
  }

  WooCommerce.post('orders', orderData)

  res.status(200)
}
