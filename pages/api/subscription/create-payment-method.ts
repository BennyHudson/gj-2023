/* eslint-disable @typescript-eslint/no-var-requires */
import { NextApiRequest, NextApiResponse } from 'next'

export default async function createPaymentMethod(req: NextApiRequest, res: NextApiResponse) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  const paymentMethod = await stripe.paymentMethods.create({
    type: 'card',
    card: {
      number: req.body.cardNumber,
      exp_month: parseInt(req.body.expiryMonth),
      exp_year: parseInt(req.body.expiryYear),
      cvc: req.body.cvc,
    },
  })

  res.status(200).send(paymentMethod.id)
}
