import React, { ReactElement, FC } from 'react'

import LoginForm from '@components/LoginForm'
import Tabs from '@components/Tabs'
import QuickSubscribe from '@components/QuickSubscribe'

import * as Styled from './styles/ClubhouseGateway.style'

import { ClubhouseGatewayProps } from './ClubhouseGateway.types'

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
