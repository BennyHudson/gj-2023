import { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../../WooCommerce'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req

  WooCommerce.delete(`subscriptions/${id}?force=true`)  

  res.status(200).send('Subscription cancelled')
}
