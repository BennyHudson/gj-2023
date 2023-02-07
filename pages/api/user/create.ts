import { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../WooCommerce'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const { billing, shipping, password } = req.body
  
  const customerData = {
    email: billing.email,
    first_name: billing.first_name,
    last_name: billing.last_name,
    username: billing.email,
    billing,
    shipping: {
      first_name: billing.first_name,
      last_name: billing.last_name,
      ...shipping,
    },
    password,
    is_paying_customer: true,
  }

  WooCommerce.post('customers', customerData)
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((error) => {
      res.status(error.response.data.data.status).json(error.response.data)
    })

}