import React, { ReactElement, FC, useContext } from 'react'
import * as Yup from 'yup'

import TextField from '@components/TextField'
import Select from '@components/Select'
import EditButton from '@components/EditButton'

import { countries } from '@helpers/countries'
import { Form } from 'formik'
import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/ShippingForm.style'

import { ShippingFormProps } from './ShippingForm.types'

export const shippingValidation = Yup.object().shape({
  shipping: Yup.object().shape({
    address_1: Yup.string().required('Required field'),
    city: Yup.string().required('Required field'),
    state: Yup.string().required('Required field'),
    postcode: Yup.string().required('Required field'),
    country: Yup.string().required('Required field'),
  }),
})

const ShippingForm: FC<ShippingFormProps> = ({
  billingAddress,
  setFieldValue,
  errors,
}): ReactElement => {
  const { customer } = useContext(PageContext) as PageContextProps

  return (
    <Form>
      <Styled.ShippingForm>
        <EditButton
          type='button'
          onClick={() => {
            setFieldValue('shipping.address_1', customer?.billing?.address_1 || billingAddress.address_1)
            setFieldValue('shipping.address_2', customer?.billing?.address_2 || billingAddress.address_2)
            setFieldValue('shipping.city', customer?.billing?.city || billingAddress.city)
            setFieldValue('shipping.state', customer?.billing?.state || billingAddress.state)
            setFieldValue('shipping.postcode', customer?.billing?.postcode || billingAddress.postcode)
            setFieldValue('shipping.country', customer?.billing?.country || billingAddress.country)
          }}
          text='Copy from billing address'
        />
        <TextField
          isRequired
          label='Address Line 1'
          id='shipping.address_1'
          target='shipping.address_1'
          validationMessage={errors?.shipping?.address_1}
        />
        <TextField label='Address Line 2' id='shipping.address_2' target='shipping.address_2' />
        <TextField isRequired label='Town' id='shipping.city' target='shipping.city' validationMessage={errors?.shipping?.city} />
        <TextField label='County' id='shipping.state' target='shipping.state' validationMessage={errors?.shipping?.state} />
        <TextField
          isRequired
          label='Postcode'
          id='shipping.postcode'
          target='shipping.postcode'
          validationMessage={errors?.shipping?.postcode}
        />
        <Select
          label='Country'
          choices={countries}
          isRequired
          id='shipping.country'
          target='shipping.country'
          validationMessage={errors?.shipping?.country}
        />
        <EditButton text='Continue' type='submit' />
      </Styled.ShippingForm>
    </Form>
  )
}

export default ShippingForm
