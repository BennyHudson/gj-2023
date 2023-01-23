import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import { StyledClubBannerProps } from './ClubBanner.style.types'

export const ClubBanner = styled.div(
  (props: StyledClubBannerProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    gap: ${props.theme.spacing[4]}px;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    ${respondTo.md(css`
      width: 100%;
      gap: ${props.theme.spacing[8]}px;
    `)}
  `,
)

export const Image = styled.div(
  (): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;

    ${respondTo.md(css`
      grid-column: col-start / span 6;
    `)}
  `,
)

export const Content = styled.div(
  (): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;

    ${respondTo.md(css`
      grid-column: col-start 7 / span 6;
    `)}
  `,
)

export const ButtonGroup = styled.div(
  (props: StyledClubBannerProps): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: ${props.theme.spacing[4]}px 0 0;
    gap: ${props.theme.spacing[2]}px;

    ${respondTo.md(css`
      flex-direction: row;
    `)}
  `,
)
