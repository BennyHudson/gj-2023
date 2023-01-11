import React, { ReactElement, FC, useContext, useState, useEffect } from 'react'
import useSwr from 'swr'

import featuredImageUrl from '@helpers/featuredImageUrl'

import * as Styled from './styles/MyAccount.style'
import PageContext, { PageContextProps } from '@context/PageContext'
import Heading from '@components/typography/Heading'
import Feed from '@components/grids/Feed'
import Tabs from '@components/Tabs'
import CustomerDetails from '@components/clubhouse/CustomerDetails'
import Button from '@components/interactions/Button'
import Thumbnail from '@components/imagery/Thumbnail'
import CustomerSubs from '@components/clubhouse/CustomerSubs'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const MyAccount: FC = (): ReactElement => {
  const { customerId, setCustomerId, setToken } = useContext(PageContext) as PageContextProps
  const { data } = useSwr(`/api/user/${customerId}`, fetcher)

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
      content: <Feed category='Members' count={6} columns={3} />
    },
  ]

  const logoutHandler = () => {
    setCustomerId()
    setToken()
  }

  return (
    <Styled.MyAccount>
      {data && 
        <Styled.MyAccountHeader>
          <Thumbnail featuredImage={featuredImageUrl(data.avatar_url)} type='circle' size={1} />
          <Heading text={`Welcome back, ${data.first_name}`} font='ChronicleCondensed' size={3} noMargin />
          <Button onClick={logoutHandler} size={1} text='Logout' />
        </Styled.MyAccountHeader>
      }
      <Tabs tabs={tabs} />
    </Styled.MyAccount>
  )
}

export default MyAccount
