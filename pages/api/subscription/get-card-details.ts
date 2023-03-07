import { NextApiRequest, NextApiResponse } from 'next'

/* eslint-disable @typescript-eslint/no-var-requires */
export default async function getCardDetails(req: NextApiRequest, res: NextApiResponse) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  const paymentMethod = await stripe.customers.retrievePaymentMethod(req.body.customerId, req.body.paymentMethod)

  res.status(200).send(paymentMethod)
}
