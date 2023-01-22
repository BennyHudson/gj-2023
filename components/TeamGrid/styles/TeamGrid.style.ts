import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Heading } from '@components/Heading/styles/Heading.style'

import { StyledTeamGridProps } from './TeamGrid.style.types'

export const TeamGridWrapper = styled.div((props: StyledTeamGridProps): FlattenSimpleInterpolation => css`
  padding-bottom: ${props.theme.spacing[8]}px;
  margin-bottom: ${props.theme.spacing[8]}px;
  border-bottom: 1px solid ${props.theme.colours.midGrey};

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none;
  }

  ${Heading} {
    max-width: 60%;
  }
`)

export const TeamGrid = styled.ul((props: StyledTeamGridProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props.theme.spacing[4]}px;
`)

export const TeamMember = styled.li((): FlattenSimpleInterpolation => css`
  ${Heading} {
    max-width: 100%;
  }
`)
