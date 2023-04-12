import { Formik } from 'formik'
import type { FC, ReactElement} from 'react'
import React, { useContext, useState } from 'react'

import BillingForm from '@components/BillingForm'
import { billingValidation } from '@components/BillingForm/BillingForm'
import EditButton from '@components/EditButton'
import Heading from '@components/Heading'
import Notification from '@components/Notification'
import ValueWithLabel from '@components/ValueWithLabel'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import * as Styled from '../../styles/CustomerDetails.style'

const BillingAddress: FC = (): ReactElement | null => {
  const { customer } = useContext(PageContext) as PageContextProps
  const [editMode, setEditMode] = useState(false)
  const [showPostEditMessage, setShowPostEditMessage] = useState(false)

  if (!customer) return null

  return (
    <Styled.DetailsBlock>
      <Styled.DetailsHeading>
        <Heading size={2} font='ChronicleCondensed' text='Billing Address' noMargin />
        {editMode && <EditButton text='Cancel' onClick={() => setEditMode(false)} />}
      </Styled.DetailsHeading>
      {editMode ? (
        <Formik
          validationSchema={billingValidation}
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            billing: {
              address_1: customer.billing?.address_1,
              address_2: customer.billing?.address_2,
              city: customer.billing?.city,
              state: customer.billing?.state,
              postcode: customer.billing?.postcode,
              country: customer.billing?.country,
            },
          }}
          onSubmit={async (values) => {
            const updateUser = await fetch(`/api/user/update/${customer?.id}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                billing: values.billing,
              }),
            })

            if (updateUser.status === 200) {
              setEditMode(false)
              setShowPostEditMessage(true)
              setTimeout(() => {
                setShowPostEditMessage(false)
              }, 5000)
            }
          }}
        >
          {(props) => <BillingForm {...props} />}
        </Formik>
      ) : (
        <>
          {showPostEditMessage && <Notification text='Billing address updated successfully' state='success' />}
          {customer.billing?.address_1 && <ValueWithLabel label='Address Line 1' value={customer.billing.address_1} />}
          {customer.billing?.address_2 && <ValueWithLabel label='Address Line 2' value={customer.billing.address_2} />}
          {customer.billing?.city && <ValueWithLabel label='City' value={customer.billing.city} />}
          {customer.billing?.state && <ValueWithLabel label='State' value={customer.billing.state} />}
          {customer.billing?.postcode && <ValueWithLabel label='Postcode' value={customer.billing.postcode} />}
          {customer.billing?.country && <ValueWithLabel label='Country' value={customer.billing.country} />}
          <EditButton onClick={() => setEditMode(true)} text='Edit these Details' />
        </>
      )}
    </Styled.DetailsBlock>
  )
}

export default BillingAddress
