import React, { ReactElement, FC } from 'react'
import { Form } from 'formik'

import TextField from '@components/TextField'
import EditButton from '@components/EditButton'
import Select from '@components/Select'

import { countries } from '@helpers/countries'

const BillingForm: FC = (): ReactElement => {
  return (
    <Form>
      <TextField isRequired label='Address Line 1' id='billing.address_1' target='billing.address_1' />
      <TextField label='Address Line 2' id='billing.address_2' target='billing.address_2' />
      <TextField isRequired label='Town' id='billing.city' target='billing.city' />
      <TextField label='County' id='billing.state' target='billing.state' />
      <TextField isRequired label='Postcode' id='billing.postcode' target='billing.postcode' />
      <Select label='Country' choices={countries} isRequired id='billing.country' target='billing.country' />
      <EditButton text='Continue' type='submit' />
    </Form>
  )
}

export default BillingForm
