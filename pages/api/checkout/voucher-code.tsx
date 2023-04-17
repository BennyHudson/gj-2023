import dayjs from 'dayjs'
import type { NextApiRequest, NextApiResponse } from 'next'

import type { Voucher } from '@typings/Voucher.types'

import { WooCommerce } from '../WooCommerce'

export default async function voucherCode(req: NextApiRequest, res: NextApiResponse) {
  const allVoucherCodes = await WooCommerce.get('coupons?per_page=100')
  const currentCode = allVoucherCodes.data.find((voucher: Voucher) => voucher.code.toLowerCase() === req.body.voucherCode.toLowerCase())

  if (currentCode) {
    const now = dayjs().toISOString()

    if (dayjs(currentCode.date_expires_gmt).isBefore(now)) {
      res.status(400).send('Voucher code has expired')
      return
    }

    res.status(200).send(currentCode)
    return
  }

  res.status(400).send('Voucher code does not exist')
}
