import { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../../WooCommerce'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req

  const data = {
    status: 'completed',
  }

  const completedOrder = await WooCommerce.put(`orders/${id}`, data)

  res.status(200).send(completedOrder.data)
}
