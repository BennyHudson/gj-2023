import React, { ReactElement, FC } from 'react'
import * as Yup from 'yup'

import TextField from '@components/TextField'
import EditButton from '@components/EditButton'
import Select from '@components/Select'

import { countries } from '@helpers/countries'
import { Form } from 'formik'

import { BillingFormProps } from './BillingForm.types'

export const billingValidation = Yup.object().shape({
  billing: Yup.object().shape({
    address_1: Yup.string().required('Required field'),
    city: Yup.string().required('Required field'),
    state: Yup.string().required('Required field'),
    postcode: Yup.string().required('Required field'),
    country: Yup.string().required('Required field'),
  })
})

const BillingForm: FC<BillingFormProps> = (props: BillingFormProps): ReactElement => {
  return (
    <Form>
      <TextField isRequired label='Address Line 1' id='billing.address_1' target='billing.address_1' validationMessage={props.errors?.billing?.address_1} />
      <TextField label='Address Line 2' id='billing.address_2' target='billing.address_2' />
      <TextField isRequired label='Town' id='billing.city' target='billing.city' validationMessage={props.errors?.billing?.city} />
      <TextField label='County' id='billing.state' target='billing.state' validationMessage={props.errors?.billing?.state} />
      <TextField isRequired label='Postcode' id='billing.postcode' target='billing.postcode' validationMessage={props.errors?.billing?.postcode} />
      <Select label='Country' choices={countries} isRequired id='billing.country' target='billing.country' validationMessage={props.errors?.billing?.country} />
      <EditButton text='Continue' type='submit' />
    </Form>
  )
}

export default BillingForm
