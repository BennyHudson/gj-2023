import React, { ReactElement, FC, useContext } from 'react'
import { Formik, Form } from 'formik'
import dayjs from 'dayjs'

import Heading from '@components/Heading'
import ValueWithLabel from '@components/ValueWithLabel'
import EditButton from '@components/EditButton'

import * as Styled from './styles/PaymentDetails.style'

import { PaymentDetailsProps } from './PaymentDetails.types'
import NameField from '@components/NameField'
import PageContext, { PageContextProps } from '@context/PageContext'

const PaymentDetails: FC<PaymentDetailsProps> = ({
  cardDetails,
  editMode,
  setEditMode,
  customerId,
  subscriptionId,
}: PaymentDetailsProps): ReactElement => {
  const { customer, getCustomerData } = useContext(PageContext) as PageContextProps
  return (
    <Styled.PaymentDetails>
      {editMode ? (
        <Styled.PaymentForm>
          <Formik
            initialValues={{
              cardNumber: '',
              expiryMonth: dayjs().format('M'),
              expiryYear: dayjs().format('YYYY'),
              cvc: '',
            }}
            onSubmit={async (values) => {
              const newPaymentMethod = await fetch('/api/subscription/create-payment-method', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
              })

              const paymentMethodId = await newPaymentMethod.text()

              await fetch('/api/subscription/attach-payment-method', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  paymentMethodId,
                  customerId,
                  subscriptionId,
                }),
              })

              getCustomerData(customer!.id)
              setEditMode(false)
            }}
          >
            <Form>
              <NameField
                label='Card Details'
                split='2/1'
                inputs={[
                  {
                    isRequired: true,
                    label: 'Card Number',
                    id: 'cardNumber',
                    name: 'cardNumber',
                  },
                  {
                    isRequired: true,
                    label: 'CVC',
                    id: 'cvc',
                    name: 'cvc',
                  },
                ]}
              />
              <NameField
                label='Expiry Date'
                inputs={[
                  {
                    isRequired: true,
                    label: 'Month',
                    id: 'expiryMonth',
                    name: 'expiryMonth',
                    choices: [
                      {
                        value: 1,
                        text: 'January',
                      },
                      {
                        value: 2,
                        text: 'February',
                      },
                      {
                        value: 3,
                        text: 'March',
                      },
                      {
                        value: 4,
                        text: 'April',
                      },
                      {
                        value: 5,
                        text: 'May',
                      },
                      {
                        value: 6,
                        text: 'June',
                      },
                      {
                        value: 7,
                        text: 'July',
                      },
                      {
                        value: 8,
                        text: 'August',
                      },
                      {
                        value: 9,
                        text: 'September',
                      },
                      {
                        value: 10,
                        text: 'October',
                      },
                      {
                        value: 11,
                        text: 'November',
                      },
                      {
                        value: 12,
                        text: 'December',
                      },
                    ],
                  },
                  {
                    isRequired: true,
                    label: 'Year',
                    id: 'expiryYear',
                    name: 'expiryYear',
                  },
                ]}
              />
              <EditButton type='submit' text='Update payment method' />
            </Form>
          </Formik>
        </Styled.PaymentForm>
      ) : (
        <>
          <Heading size={1} font='Cera' weight={2} text='Payment Details' noMargin />
          <ValueWithLabel label='Card type' value={cardDetails.brand} transform='capitalize' />
          <ValueWithLabel label='Card number' value={`**** **** **** ${cardDetails.last4}`} />
          <ValueWithLabel label='Expiry date' value={`${cardDetails.exp_month} / ${cardDetails.exp_year}`} />
          <EditButton onClick={() => setEditMode(true)} text='Update payment details' />
        </>
      )}
    </Styled.PaymentDetails>
  )
}

export default PaymentDetails
