import { useQuery } from '@apollo/client'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faLockAlt } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Button from '@components/Button'
import ClubOverview from '@components/ClubOverview'
import Heading from '@components/Heading'

import { clubQuery } from '@queries/pages/club'

import * as Styled from './styles/Paywall.style'

const Paywall: FC = (): ReactElement => {
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
