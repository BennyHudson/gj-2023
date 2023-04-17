import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

export default async function savePaymentMethod(req: NextApiRequest, res: NextApiResponse) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
  })

  const paymentMethod = await stripe.paymentMethods.retrieve(`${req.body}`)

  res.send({
    customerId: paymentMethod.customer,
  })
}
