import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Heading } from '@components/Heading/styles/Heading.style'

import { StyledTeamGridProps } from './TeamGrid.style.types'
import respondTo from '@mixins/respondTo'

export const TeamGridWrapper = styled.div(
  (props: StyledTeamGridProps): FlattenSimpleInterpolation => css`
    padding-bottom: ${props.theme.spacing[4]}px;
    border-bottom: 1px solid ${props.theme.colours.midGrey};
    width: 90%;
    margin: 0 auto ${props.theme.spacing[4]}px;

    ${respondTo.md(css`
      width: 100%;
      margin: 0 auto ${props.theme.spacing[8]}px;
      padding-bottom: ${props.theme.spacing[8]}px;
    `)}

    &:last-child {
      padding-bottom: 0;
      margin-bottom: 0;
      border-bottom: none;
    }

    ${respondTo.md(css`
      ${Heading} {
        max-width: 60%;
      }
    `)}
  `,
)

export const TeamGrid = styled.ul(
  (props: StyledTeamGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${props.theme.spacing[2]}px;

    ${respondTo.md(css`
      grid-template-columns: repeat(4, 1fr);
      gap: ${props.theme.spacing[4]}px;
    `)}
  `,
)

export const TeamMember = styled.li(
  (): FlattenSimpleInterpolation => css`
    ${Heading} {
      max-width: 100%;
    }
  `,
)
