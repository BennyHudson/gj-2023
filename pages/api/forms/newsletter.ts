import { NextApiRequest, NextApiResponse } from 'next'

const newsletterHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const myHeaders = new Headers()

  const auth = Buffer.from(`${process.env.GRAVITY_CK}:${process.env.GRAVITY_CS}`).toString('base64')
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('Authorization', `Basic ${auth}`)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      input_3_3: req.body.input_3['3'],
      input_3_6: req.body.input_3['6'],
      input_4: req.body.input_4,
      input_5_1: req.body.input_5 ? req.body.input_5[0] : '0',
    }),
  }

  const result = await fetch('https://cms.thegentlemansjournal.com/wp-json/gf/v2/forms/342/submissions', requestOptions)
  const response = await result.json()
  
  res.status(result.status)
  res.send({ status: result.status, ...response })
}

export default newsletterHandler