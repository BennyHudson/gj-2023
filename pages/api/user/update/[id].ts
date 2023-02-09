import { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../../WooCommerce'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req

  console.log(req.body)

  const wooCommerceData = await WooCommerce.put(`customers/${id}`, req.body)
  if (wooCommerceData) {
    res.status(200).json(wooCommerceData.data)
    return
  }
}
