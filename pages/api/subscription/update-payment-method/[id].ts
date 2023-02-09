import { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../../WooCommerce'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req

  const wooCommerceData = await WooCommerce.put(`subscriptions/${id}`, {
    status: 'active',
    payment_details: {
      post_meta: {
        _stripe_customer_id: req.body.stripeCustomerId.customerId,
        _stripe_source_id: req.body.payment_method,
      }
    },
  })
  if (wooCommerceData) {
    res.status(200).json(wooCommerceData.data)
    return
  }
}
