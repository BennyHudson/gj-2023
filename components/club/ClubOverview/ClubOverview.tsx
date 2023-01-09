import React, { ReactElement, FC } from 'react'

import Section from '@components/layout/Section'
import Title from '@components/typography/Title'
import Heading from '@components/typography/Heading'

import * as Styled from './styles/ClubOverview.style'

import { ClubOverviewProps } from './ClubOverview.types'
import Paragraph from '@components/typography/Paragraph'

const ClubOverview: FC<ClubOverviewProps> = ({
  overview,
}: ClubOverviewProps): ReactElement => {
  return (
    <Styled.ClubOverview>
      <Section appearance='tertiary'>
        <Title title='Membership Overview' subtitle='Membership includes:' />
        <Styled.ClubOverviewGrid>
          {overview.item.map((overviewItem, index) => {
            return (
              <div key={index}>
                <Heading text={overviewItem.title} size={1} />
                <Paragraph text={overviewItem.description} font='Cera' size={1} />
              </div>
            )
          })}
        </Styled.ClubOverviewGrid>
      </Section>
    </Styled.ClubOverview>
  )
}

export default ClubOverview
