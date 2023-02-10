import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/Paywall.style'

import { PaywallProps } from './Paywall.types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLockAlt } from '@fortawesome/pro-light-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Heading from '@components/Heading'
import Button from '@components/Button'
import { useQuery } from '@apollo/client'
import { clubQuery } from '@queries/pages/club'
import ClubOverview from '@components/ClubOverview'

const Paywall: FC<PaywallProps> = (): ReactElement => {
  const { data } = useQuery(clubQuery.query)
  return (
    <Styled.Paywall>
      <FontAwesomeIcon icon={faLockAlt as IconProp} />
      <Heading text='This article is for Clubhouse members only.' font='ChronicleCondensed' size={2} noMargin />
      {data && <ClubOverview overview={data.product.subscriptionPerks.subscriptionPerks} />}
      <Styled.Buttons>
        <Button href='/club' text='Sign Up' />
        <Button href='/clubhouse' text='Sign In' />
      </Styled.Buttons>
    </Styled.Paywall>
  )
}

export default Paywall
