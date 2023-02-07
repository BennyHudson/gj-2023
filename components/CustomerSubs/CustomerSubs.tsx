import React, { ReactElement, FC, useState } from 'react'
import useSwr from 'swr'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

import * as Styled from './styles/CustomerSubs.style'

import { CustomerSubsProps } from './CustomerSubs.types'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import ValueWithLabel from '@components/ValueWithLabel'
import EditButton from '@components/EditButton'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const CustomerSubs: FC<CustomerSubsProps> = ({ customer }: CustomerSubsProps): ReactElement => {
  dayjs.extend(advancedFormat)
  const subscriptionData = customer.meta_data.find((meta) => meta.key === '_wcs_subscription_ids_cache')
  const { data } = useSwr(`/api/subscription/${subscriptionData.value[0]}`, fetcher)

  const [confirmationMessage, setConfirmationMessage] = useState(false)

  const cancelSubscription = async (id: number) => {
    const deleteSub = await fetch(`/api/subscription/delete/${id}`)
  }

  return (
    <Styled.CustomerSubs>
      {data ?
        data.line_items.map((subscription) => {
          return (
            <>
              <Heading size={2} font='ChronicleCondensed' text={subscription.name} />
              <Paragraph size={2} font='Cera'>
                Renews every {data.billing_interval > 1 && data.billing_interval} {data.billing_interval > 1 ? `${data.billing_period}s` : data.billing_period} at £
                {subscription.total}
              </Paragraph>
              <ValueWithLabel label='Next renewal date' value={dayjs(data.next_payment_date_gmt).format('Do MMMM YYYY')} />
              {confirmationMessage ? 
                <>
                  <Paragraph size={2} font='Cera'>
                    Are you sure you want to cancel this subscription? <EditButton onClick={() => cancelSubscription(data.id)} text='Yes' /> | <EditButton onClick={() => setConfirmationMessage(false)} text='No' />  
                  </Paragraph>
                </>
                :
                <EditButton onClick={() => setConfirmationMessage(true)} text='Cancel' />
              }
            </>
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
