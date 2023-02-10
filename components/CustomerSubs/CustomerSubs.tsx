import React, { ReactElement, FC, useState, useContext } from 'react'
import useSwr from 'swr'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

import * as Styled from './styles/CustomerSubs.style'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import ValueWithLabel from '@components/ValueWithLabel'
import EditButton from '@components/EditButton'
import PageContext, { PageContextProps } from '@context/PageContext'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const CustomerSubs: FC = (): ReactElement => {
  const { subscription } = useContext(PageContext) as PageContextProps

  const [confirmationMessage, setConfirmationMessage] = useState(false)

  const cancelSubscription = async (id: number) => {
    await fetch(`/api/subscription/delete/${id}`)
  }

  return (
    <Styled.CustomerSubs>
      {subscription ?
        <>
          <Heading size={2} font='ChronicleCondensed' text={subscription.name} />
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
        </>
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
