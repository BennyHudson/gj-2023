import type { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../WooCommerce'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const { billingAddress, shippingAddress, cart, customer_id, voucher } = req.body

  const orderData = {
    customer_id,
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
    coupon_lines: voucher ? [{ code: voucher.code }] : [],
  }

  const order = await WooCommerce.post('orders', orderData)
  res.status(200).json(order.data)
}
