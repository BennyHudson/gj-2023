import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

export default async function getCardDetails(req: NextApiRequest, res: NextApiResponse) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
  })

  const paymentMethod = await stripe.customers.retrievePaymentMethod(req.body.customerId, req.body.paymentMethod)

  res.status(200).send(paymentMethod)
}
