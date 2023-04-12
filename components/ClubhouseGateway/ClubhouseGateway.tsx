import type { FC, ReactElement } from 'react'
import React from 'react'

import LoginForm from '@components/LoginForm'
import QuickSubscribe from '@components/QuickSubscribe'
import Tabs from '@components/Tabs'

import type { ClubhouseGatewayProps } from './ClubhouseGateway.types'
import * as Styled from './styles/ClubhouseGateway.style'

const ClubhouseGateway: FC<ClubhouseGatewayProps> = ({ products, freeGift }: ClubhouseGatewayProps): ReactElement => {
  const tabs = [
    {
      title: 'Login',
      content: <LoginForm />,
    },
    {
      title: 'Subscribe',
      content: <QuickSubscribe products={products} freeGift={freeGift} />,
    },
  ]

  return (
    <Styled.ClubhouseGateway>
      <Tabs tabs={tabs} />
    </Styled.ClubhouseGateway>
  )
}

export default ClubhouseGateway
