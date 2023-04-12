import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import Section from '@components/Section'
import Title from '@components/Title'

import { useBreakpoints } from '@hooks/useBreakpoints'

import type { ClubOverviewProps } from './ClubOverview.types'
import * as Styled from './styles/ClubOverview.style'

const ClubOverview: FC<ClubOverviewProps> = ({ overview }: ClubOverviewProps): ReactElement => {
  const { sm } = useBreakpoints()
  return (
    <Styled.ClubOverview>
      <Section appearance={sm ? 'primary' : 'tertiary'}>
        <Title title='Membership Overview' subtitle='Membership includes:' />
        <Styled.ClubOverviewGrid>
          {overview.map((overviewItem, index) => {
            return (
              <Styled.Item key={index}>
                <Styled.Index>
                  <FontAwesomeIcon icon={faAngleRight as IconProp} />
                </Styled.Index>
                <Heading text={overviewItem.subscriptionPerk} size={2} font='ChronicleCondensed' />
                {/* <Paragraph text={overviewItem.subscriptionPerk} font='Cera' size={1} /> */}
              </Styled.Item>
            )
          })}
        </Styled.ClubOverviewGrid>
      </Section>
    </Styled.ClubOverview>
  )
}

export default ClubOverview
