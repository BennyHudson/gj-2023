import React, { ReactElement, FC, useContext } from 'react'

import * as Styled from './styles/CustomerSubs.style'

import Paragraph from '@components/Paragraph'
import EditButton from '@components/EditButton'
import PageContext, { PageContextProps } from '@context/PageContext'

import Subscription from './components/Subscription'

const CustomerSubs: FC = (): ReactElement => {
  const { subscriptions } = useContext(PageContext) as PageContextProps

  return (
    <Styled.CustomerSubs>
      {subscriptions?.length > 0 ? subscriptions.map((subscription, index) => {
        return (
          <Subscription key={index} subscription={subscription} />
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
