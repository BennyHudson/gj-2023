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



  // Object.keys(req.body).forEach((key) => {
  //   if (req.body[key] instanceof Array) {
  //     req.body[key].forEach((value, index) => {
  //       // console.log(value)
  //       // formResponses = {
  //       //   ...formResponses,
  //       //   [`${key}_${index + 1}`]: value,
  //       // }
  //     })
  //     delete formResponses[key]
  //   }
  // })

  console.log(formResponses)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(formResponses),
  }

  const result = await fetch(`https://dev.thegentlemansjournal.com/wp-json/gf/v2/forms/${id}/submissions`, requestOptions)
  const response = await result.json()
  
  res.status(result.status)
  res.send({ status: result.status, ...response })
}

export default formHandler