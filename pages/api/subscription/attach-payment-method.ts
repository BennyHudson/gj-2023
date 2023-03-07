/* eslint-disable @typescript-eslint/no-var-requires */
import { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../WooCommerce'

export default async function createPaymentMethod(req: NextApiRequest, res: NextApiResponse) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  const paymentMethod = await stripe.paymentMethods.attach(req.body.paymentMethodId, { customer: req.body.customerId })

  if (!paymentMethod) {
    res.status(400).send('Stripe Error')
    return
  }

  const wooCommerceData = await WooCommerce.put(`subscriptions/${req.body.subscriptionId}`, {
    status: 'active',
    meta_data: [
      {
        key: '_stripe_customer_id',
        value: req.body.customerId,
      },
      {
        key: '_stripe_source_id',
        value: req.body.paymentMethodId,
      },
    ],
  })

  if (wooCommerceData) {
    res.status(200).json(wooCommerceData.data)
    return
  }
}
