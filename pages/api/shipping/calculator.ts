import type { NextApiRequest, NextApiResponse } from 'next'

import { WooCommerce } from '../WooCommerce'

const europeanCountries = [
  'AL',
  'AD',
  'AM',
  'AT',
  'AZ',
  'BY',
  'BE',
  'BA',
  'BG',
  'HR',
  'CY',
  'CZ',
  'DK',
  'EE',
  'FI',
  'FR',
  'GE',
  'DE',
  'GR',
  'HU',
  'IS',
  'IE',
  'IE',
  'KZ',
  'LV',
  'LI',
  'LT',
  'LU',
  'MT',
  'MD',
  'MC',
  'ME',
  'NL',
  'NO',
  'PL',
  'PT',
  'RO',
  'RU',
  'SM',
  'RS',
  'SK',
  'SI',
  'ES',
  'SE',
  'CH',
  'TR',
  'UA',
]

export default async function shippingCalculator(req: NextApiRequest, res: NextApiResponse) {
  const { shippingAddress, cart } = req.body
  const { country } = shippingAddress

  if (country === 'GB') {
    res.status(200).send({
      title: 'Free Shipping',
      cost: 0,
      id: 'free_shipping',
    })
    return
  }

  let shippingClass

  await Promise.all(
    cart.map(async (cartItem) => {
      const itemDetails = await WooCommerce.get(`products/${cartItem}`)
      if (itemDetails.data.shipping_class_id > 0) {
        shippingClass = itemDetails.data.shipping_class_id
      }
    }),
  )

  let shippingZone = 0
  if (europeanCountries.includes(country)) {
    shippingZone = 2
  }
  if (country === 'US') {
    shippingZone = 3
  }

  const shippingMethods = await WooCommerce.get(`shipping/zones/${shippingZone}/methods`)
  const flatRateShipping = shippingMethods.data.find((shippingMethod) => shippingMethod.method_id === 'flat_rate')
  const value = flatRateShipping.settings[`class_cost_${shippingClass}`].value
  const cost = parseInt(value.replace('*[qty]', ''))

  if (value) {
    res.status(200).send({
      title: 'Flat Rate',
      cost,
      id: 'flat_rate',
    })
  }
}
