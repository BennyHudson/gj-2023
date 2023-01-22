import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledClubBannerProps } from './ClubBanner.style.types'

export const ClubBanner = styled.div((props: StyledClubBannerProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: ${props.theme.spacing[8]}px;
  align-items: center;
`)

export const Image = styled.div((): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 6;
`)

export const Content = styled.div((): FlattenSimpleInterpolation => css`
  grid-column: col-start 7 / span 5;
`)

export const ButtonGroup = styled.div((props: StyledClubBannerProps): FlattenSimpleInterpolation => css`
  display: flex;
  justify-content: flex-start;
  padding: ${props.theme.spacing[4]}px 0 0;
  gap: ${props.theme.spacing[2]}px;
`)
