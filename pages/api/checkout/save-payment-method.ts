import type { NextApiRequest, NextApiResponse } from 'next'

/* eslint-disable @typescript-eslint/no-var-requires */
export default async function savePaymentMethod(req: NextApiRequest, res: NextApiResponse) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
  const paymentMethod = await stripe.paymentMethods.retrieve(`${req.body}`)

  res.send({
    customerId: paymentMethod.customer,
  })
}
