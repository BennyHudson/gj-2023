import type { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../../WooCommerce'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req

  const wooCommerceData = await WooCommerce.put(`subscriptions/${id}`, {
    status: 'active',
    meta_data: [
      {
        key: '_stripe_customer_id',
        value: req.body.stripeCustomerId.customerId,
      },
      {
        key: '_stripe_source_id',
        value: req.body.payment_method,
      },
    ],
  })

  if (wooCommerceData) {
    res.status(200).json(wooCommerceData.data)
    return
  }
}
