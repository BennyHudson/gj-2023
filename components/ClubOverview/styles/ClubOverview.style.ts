import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Section } from '@components/Section/styles/Section.style'

import { StyledClubOverviewProps } from './ClubOverview.style.types'
import respondTo from '@mixins/respondTo'

export const ClubOverview = styled.div(
  (props: StyledClubOverviewProps): FlattenSimpleInterpolation => css`
    ${Section} {
      padding: ${props.theme.spacing[4]}px 0;
    }
  `,
)

export const ClubOverviewGrid = styled.div(
  (props: StyledClubOverviewProps): FlattenSimpleInterpolation => css`
    display: grid;
    gap: ${props.theme.spacing[4]}px;
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
    margin: 0 auto;

    ${respondTo.md(css`
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
    `)}
  `,
)
