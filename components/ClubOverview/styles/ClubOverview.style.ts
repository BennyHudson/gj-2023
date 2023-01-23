import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Section } from '@components/Section/styles/Section.style'

import { StyledClubOverviewProps } from './ClubOverview.style.types'

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
    grid-template-columns: repeat(3, 1fr);
  `,
)
