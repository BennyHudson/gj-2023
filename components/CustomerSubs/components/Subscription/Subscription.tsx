import React, { ReactElement, FC, useState, useContext, useEffect } from 'react'
import dayjs from 'dayjs'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import ValueWithLabel from '@components/ValueWithLabel'
import EditButton from '@components/EditButton'

import * as Styled from './styles/Subscription.style'

import { SubscriptionProps } from './Subscription.types'
import PageContext, { PageContextProps } from '@context/PageContext'
import PaymentDetails from '../PaymentDetails/'

const Subscription: FC<SubscriptionProps> = ({ subscription }: SubscriptionProps): ReactElement => {
  const { customer, getCustomerData } = useContext(PageContext) as PageContextProps

  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false)
  const [cardDetails, setCardDetails] = useState()
  const [editMode, setEditMode] = useState(false)

  const stripeCustomerId = subscription.meta_data.find((data) => data.key === '_stripe_customer_id')
  const paymentMethod = subscription.meta_data.find((data) => data.key === '_stripe_source_id')

  const cancelSubscription = async (id: number) => {
    await fetch(`/api/subscription/delete/${id}`)
    getCustomerData(customer.id)
  }

  const getCardDetails = async () => {
    const paymentDetails = await fetch('/api/subscription/get-card-details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerId: stripeCustomerId.value,
        paymentMethod: paymentMethod.value,
      }),
    })
    const subPaymentMethod = await paymentDetails.json()
    setCardDetails(subPaymentMethod.card)
  }

  useEffect(() => {
    getCardDetails()
  }, [])

  return (
    <Styled.Subscription>
      <Heading size={2} font='ChronicleCondensed' text={subscription.line_items[0].name} noMargin />
      <Styled.SubscriptionDetails>
        <ValueWithLabel label='Status' value={subscription.status} transform='capitalize' />
        <Paragraph size={2} font='Cera' noMargin>
          Renews every {subscription.billing_interval > 1 && subscription.billing_interval}{' '}
          {subscription.billing_interval > 1 ? `${subscription.billing_period}s` : subscription.billing_period} at £{subscription.total}
        </Paragraph>
        <ValueWithLabel label='Next renewal date' value={dayjs(subscription.next_payment_date_gmt).format('Do MMMM YYYY')} />
      </Styled.SubscriptionDetails>
      {cardDetails && (
        <PaymentDetails
          cardDetails={cardDetails}
          editMode={editMode}
          setEditMode={setEditMode}
          customerId={stripeCustomerId.value}
          subscriptionId={subscription.id}
        />
      )}
      {!editMode && (
        <>
          {showConfirmationMessage ? (
            <>
              <Paragraph size={2} font='Cera'>
                Are you sure you want to cancel this subscription?{' '}
                <EditButton onClick={() => cancelSubscription(subscription.id)} text='Yes' /> |{' '}
                <EditButton onClick={() => setShowConfirmationMessage(false)} text='No' />
              </Paragraph>
            </>
          ) : (
            <EditButton onClick={() => setShowConfirmationMessage(true)} text='Cancel Subscription' />
          )}
        </>
      )}
    </Styled.Subscription>
  )
}

export default Subscription
