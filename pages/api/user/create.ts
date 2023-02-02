import { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../WooCommerce'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const customerData = {
    email: req.body.billing.email,
    first_name: req.body.billing.first_name,
    last_name: req.body.billing.last_name,
    username: `${req.body.billing.first_name}.${req.body.billing.last_name}`,
    billing: {
      first_name: req.body.billing.first_name,
      last_name: req.body.billing.last_name,
      company: req.body.billing.company,
      address_1: req.body.billing.address_1,
      address_2: req.body.billing.address_2,
      city: req.body.billing.city,
      state: req.body.billing.state,
      postcode: req.body.billing.postcode,
      country: req.body.billing.country,
      email: req.body.billing.email,
      phone: req.body.billing.phone,
    },
    shipping: {
      first_name: req.body.billing.first_name,
      last_name: req.body.billing.last_name,
      company: req.body.billing.company,
      address_1: req.body.shipping.address_1,
      address_2: req.body.shipping.address_2,
      city: req.body.shipping.city,
      state: req.body.shipping.state,
      postcode: req.body.shipping.postcode,
      country: req.body.shipping.country,
    }
  }

  const wooCommerceData = await WooCommerce.post('customers', customerData)  
  res.status(200).json(wooCommerceData.data)

}