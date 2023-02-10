import React, { FC, ReactElement, useContext, useState } from 'react'
import { Formik, Form } from 'formik'

import Heading from '@components/Heading'
import EditButton from '@components/EditButton'
import ValueWithLabel from '@components/ValueWithLabel'
import ShippingForm from '@components/ShippingForm'

import * as Styled from '../../styles/CustomerDetails.style'
import PageContext, { PageContextProps } from '@context/PageContext'

const ShippingAddress: FC = (): ReactElement => {
  const { customer } = useContext(PageContext) as PageContextProps
  const [editMode, setEditMode] = useState(false)

  return (
    <Styled.DetailsBlock>
      <Styled.DetailsHeading>
        <Heading size={2} font='ChronicleCondensed' text='Shipping Address' noMargin />
        {editMode && <EditButton text='Cancel' onClick={() => setEditMode(false)} />}
      </Styled.DetailsHeading>
      {editMode ?
        <Formik
          initialValues={{
            shipping: {
              address_1: customer.shipping?.address_1,
              address_2: customer.shipping?.address_2,
              city: customer.shipping?.city,
              state: customer.shipping?.state,
              postcode: customer.shipping?.postcode,
              country: customer.shipping?.country,
            },
          }}
          onSubmit={async (values) => {
            const updateUser = await fetch(`/api/user/update/${customer?.id}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                shipping: values.shipping,
              })
            })
            
            if (updateUser.status === 200) {
              setEditMode(false)
            }
          }}
        >
          <Form>
            <ShippingForm />
          </Form>
        </Formik>
        :
        <>
          {customer.shipping.address_1 && <ValueWithLabel label='Address Line 1' value={customer.shipping.address_1} />}
          {customer.shipping.address_2 && <ValueWithLabel label='Address Line 2' value={customer.shipping.address_2} />}
          {customer.shipping.city && <ValueWithLabel label='City' value={customer.shipping.city} />}
          {customer.shipping.state && <ValueWithLabel label='State' value={customer.shipping.state} />}
          {customer.shipping.postcode && <ValueWithLabel label='Postcode' value={customer.shipping.postcode} />}
          {customer.shipping.country && <ValueWithLabel label='Country' value={customer.shipping.country} />}
          <EditButton onClick={() => setEditMode(true)} text='Edit these Details' />
        </>
      }
    </Styled.DetailsBlock>
  )
}

export default ShippingAddress