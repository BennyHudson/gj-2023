/* eslint-disable @typescript-eslint/no-var-requires */
export default async function handler(req, res) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
  const paymentMethod = await stripe.paymentMethods.retrieve(`${req.body}`)
  
  res.send({
    customerId: paymentMethod.customer,
  })
};