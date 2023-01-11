import { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../WooCommerce'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req  

  const wooCommerceData = await WooCommerce.get(`subscriptions/${id}`)
  if (wooCommerceData) {
    res.status(200).json(wooCommerceData.data)
    return
  }  
}