import React, { ReactElement, FC } from 'react'

import TextField from '@components/TextField'
import Select from '@components/Select'
import EditButton from '@components/EditButton'

import { countries } from '@helpers/countries'

const ShippingForm: FC = (): ReactElement => {
  return (
    <>
      <TextField isRequired label='Address Line 1' id='shipping.address_1' target='shipping.address_1' />
      <TextField label='Address Line 2' id='shipping.address_2' target='shipping.address_2' />
      <TextField isRequired label='Town' id='shipping.city' target='shipping.city' />
      <TextField label='County' id='shipping.state' target='shipping.state' />
      <TextField isRequired label='Postcode' id='shipping.postcode' target='shipping.postcode' />
      <Select label='Country' choices={countries} isRequired id='shipping.country' target='shipping.country' />
      <EditButton text='Continue' type='submit' />
    </>
  )
}

export default ShippingForm
