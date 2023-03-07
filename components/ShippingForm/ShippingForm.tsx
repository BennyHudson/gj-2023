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

const ShippingForm: FC<ShippingFormProps> = (props: ShippingFormProps): ReactElement => {
  const { customer } = useContext(PageContext) as PageContextProps

  return (
    <Form>
      <Styled.ShippingForm>
        <EditButton
          type='button'
          onClick={() => {
            props.setFieldValue('shipping.address_1', customer?.billing?.address_1 || props.billingAddress.address_1)
            props.setFieldValue('shipping.address_2', customer?.billing?.address_2 || props.billingAddress.address_2)
            props.setFieldValue('shipping.city', customer?.billing?.city || props.billingAddress.city)
            props.setFieldValue('shipping.state', customer?.billing?.state || props.billingAddress.state)
            props.setFieldValue('shipping.postcode', customer?.billing?.postcode || props.billingAddress.postcode)
            props.setFieldValue('shipping.country', customer?.billing?.country || props.billingAddress.country)
          }}
          text='Copy from billing address'
        />
        <TextField
          isRequired
          label='Address Line 1'
          id='shipping.address_1'
          target='shipping.address_1'
          validationMessage={props.errors?.shipping?.address_1}
        />
        <TextField label='Address Line 2' id='shipping.address_2' target='shipping.address_2' />
        <TextField isRequired label='Town' id='shipping.city' target='shipping.city' validationMessage={props.errors?.shipping?.city} />
        <TextField label='County' id='shipping.state' target='shipping.state' validationMessage={props.errors?.shipping?.state} />
        <TextField
          isRequired
          label='Postcode'
          id='shipping.postcode'
          target='shipping.postcode'
          validationMessage={props.errors?.shipping?.postcode}
        />
        <Select
          label='Country'
          choices={countries}
          isRequired
          id='shipping.country'
          target='shipping.country'
          validationMessage={props.errors?.shipping?.country}
        />
        <EditButton text='Continue' type='submit' />
      </Styled.ShippingForm>
    </Form>
  )
}

export default ShippingForm
