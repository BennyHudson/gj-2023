import React, { ReactElement, FC } from 'react'

import Heading from '@components/typography/Heading'
import Paragraph from '@components/typography/Paragraph'

import * as Styled from './styles/TeamGrid.style'

import { TeamGridProps } from './TeamGrid.types'

const TeamGrid: FC<TeamGridProps> = ({
  title,
  teamMembers,
}: TeamGridProps): ReactElement => {
  return (
    <Styled.TeamGridWrapper>
      <Heading text={title} size={2} font='ChronicleCondensed' />
      <Styled.TeamGrid>
        {teamMembers.map((teamMember, index) => {
          return (
            <Styled.TeamMember key={index}>
              <Heading size={1} noMargin text={teamMember.name} />
              <Paragraph size={1} noMargin text={teamMember.position} appearance='secondary' font='Cera' />
            </Styled.TeamMember>
          )
        })}
      </Styled.TeamGrid>
    </Styled.TeamGridWrapper>
  )
}

export default TeamGrid
