import type { FC, ReactElement} from 'react'
import React, { useContext } from 'react'

import CustomerDetails from '@components/CustomerDetails'
import CustomerSubs from '@components/CustomerSubs'
import EditButton from '@components/EditButton'
import Feed from '@components/Feed'
import Heading from '@components/Heading'
import Tabs from '@components/Tabs'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import * as Styled from './styles/MyAccount.style'

const MyAccount: FC = (): ReactElement => {
  const { setToken, customer, setCustomer } = useContext(PageContext) as PageContextProps

  const tabs = [
    {
      title: 'Your Details',
      content: <CustomerDetails />,
    },
    {
      title: 'Subscriptions',
      content: <CustomerSubs />,
    },
    {
      title: 'Members Content',
      content: <Feed category={9415} count={6} columns={3} showAdvert={false} />,
    },
  ]

  const logoutHandler = () => {
    setCustomer()
    setToken()
    localStorage.removeItem('gjToken')
  }

  return (
    <Styled.MyAccount>
      <Styled.MyAccountHeader>
        <Heading text={`Welcome back, ${customer?.first_name}`} font='ChronicleCondensed' size={3} noMargin />
        <EditButton onClick={logoutHandler} text='Logout' />
      </Styled.MyAccountHeader>
      <Tabs tabs={tabs} />
    </Styled.MyAccount>
  )
}

export default MyAccount
