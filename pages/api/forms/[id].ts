import { NextApiRequest, NextApiResponse } from 'next'

const formHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req
  const myHeaders = new Headers()

  const auth = Buffer.from(`${process.env.GRAVITY_CK}:${process.env.GRAVITY_CS}`).toString('base64')
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('Authorization', `Basic ${auth}`)

  let formResponses = req.body

  Object.keys(req.body).forEach((key) => {
    if (req.body[key] instanceof Array) {
      req.body[key].forEach((value, index) => {
        formResponses = {
          ...formResponses,
          [`${key}_${req.body[key].length > 1 ? index : index + 1}`]: value,
        }
      })
      delete formResponses[key]
    }
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(formResponses),
  }

  const result = await fetch(`${process.env.API_URL}/wp-json/gf/v2/forms/${id}/submissions`, requestOptions)
  const response = await result.json()
  
  res.status(result.status)
  res.send({ status: result.status, ...response })
}

export default formHandler