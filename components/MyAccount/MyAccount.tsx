import React, { ReactElement, FC, useContext, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import useSwr from 'swr'

import PageContext, { PageContextProps } from '@context/PageContext'

import Heading from '@components/Heading'
import Feed from '@components/Feed'
import Tabs from '@components/Tabs'
import CustomerDetails from '@components/CustomerDetails'
import CustomerSubs from '@components/CustomerSubs'
import EditButton from '@components/EditButton'

import * as Styled from './styles/MyAccount.style'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const MyAccount: FC = (): ReactElement => {
  const { setToken, token } = useContext(PageContext) as PageContextProps

  const decodedToken = jwt_decode(token)
  const { data } = useSwr(token ? `/api/user/${decodedToken.data.user.id}` : null, fetcher)

  const tabs = [
    {
      title: 'Your Details',
      content: data && <CustomerDetails customer={data} />,
    },
    {
      title: 'Subscriptions',
      content: data && <CustomerSubs customer={data} />,
    },
    {
      title: 'Members Content',
      content: <Feed category='Members' count={6} columns={3} />,
    },
  ]

  const logoutHandler = () => {
    setToken()
    localStorage.removeItem('gjToken')
  }

  return (
    <Styled.MyAccount>
      {data && (
        <Styled.MyAccountHeader>
          <Heading text={`Welcome back, ${data.first_name}`} font='ChronicleCondensed' size={3} noMargin />
          <EditButton onClick={logoutHandler} text='Logout' />
        </Styled.MyAccountHeader>
      )}
      <Tabs tabs={tabs} />
    </Styled.MyAccount>
  )
}

export default MyAccount
