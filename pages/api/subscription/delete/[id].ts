import { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../../WooCommerce'

export default async function userHandler(req: NextApiRequest, response: NextApiResponse) {
  const {
    query: { id },
  } = req

  response.status(200)

  WooCommerce.delete(`subscriptions/${id}?force=true`, function(err, data, res) {
    console.log(res)
  })  
}
