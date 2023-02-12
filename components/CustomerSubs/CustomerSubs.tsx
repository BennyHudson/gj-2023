import React, { ReactElement, FC, useState, useContext } from 'react'
import dayjs from 'dayjs'

import * as Styled from './styles/CustomerSubs.style'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import ValueWithLabel from '@components/ValueWithLabel'
import EditButton from '@components/EditButton'
import PageContext, { PageContextProps } from '@context/PageContext'

const CustomerSubs: FC = (): ReactElement => {
  const { subscriptions } = useContext(PageContext) as PageContextProps

  const [confirmationMessage, setConfirmationMessage] = useState(false)

  const cancelSubscription = async (id: number) => {
    await fetch(`/api/subscription/delete/${id}`)
  }

  return (
    <Styled.CustomerSubs>
      {subscriptions?.length > 0 ? subscriptions.map((subscription, index) => {
        return (
          <div key={index}>
            <Heading size={2} font='ChronicleCondensed' text={subscription.line_items[0].name} />
            <Paragraph size={2} font='Cera' text={`Status: ${subscription.status}`} transform='capitalize' />
            <Paragraph size={2} font='Cera'>
              Renews every {subscription.billing_interval > 1 && subscription.billing_interval} {subscription.billing_interval > 1 ? `${subscription.billing_period}s` : subscription.billing_period} at £
              {subscription.total}
            </Paragraph>
            <ValueWithLabel label='Next renewal date' value={dayjs(subscription.next_payment_date_gmt).format('Do MMMM YYYY')} />
            {confirmationMessage ? 
              <>
                <Paragraph size={2} font='Cera'>
                  Are you sure you want to cancel this subscription? <EditButton onClick={() => cancelSubscription(subscription.id)} text='Yes' /> | <EditButton onClick={() => setConfirmationMessage(false)} text='No' />  
                </Paragraph>
              </>
              :
              <EditButton onClick={() => setConfirmationMessage(true)} text='Cancel' />
            }
          </div>
        )
      })
        :
        <>
          <Paragraph size={2} font='Cera' text='You currently have no active subscriptions' />
          <EditButton text='Sign up' href='/club' />
        </>
      }
    </Styled.CustomerSubs>
  )
}

export default CustomerSubs
