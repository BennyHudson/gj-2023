import { NextApiRequest, NextApiResponse } from 'next'

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { token },
    method,
  } = req

  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${token}`)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  }

  const validation =  fetch('https://dev.thegentlemansjournal.com/wp-json/jwt-auth/v1/token/validate', requestOptions)

  if (validation) {
    res.status(200).json(validation)
    return
  }
  // .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error))

  // const wooCommerceData = await WooCommerce.get(`customers/${id}`)
  // if (wooCommerceData) {
  //   res.status(200).json(wooCommerceData.data)
  //   return
  // }
}
