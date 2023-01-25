import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledClubGiftProps } from './ClubGift.style.types'
import respondTo from '@mixins/respondTo'

export const ClubGift = styled.div(
  (props: StyledClubGiftProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    gap: ${props.theme.spacing[4]}px;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    ${respondTo.lg(css`
      width: 100%;
    `)}
  `,
)

export const GiftImage = styled.div(
  (): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    aspect-ratio: 1 / 1;
    position: relative;

    ${respondTo.md(css`
      grid-column: col-start / span 4;
    `)}

    img {
      object-fit: cover;
    }
  `,
)

export const GiftDetails = styled.div(
  (props: StyledClubGiftProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[2]}px;
    grid-column: col-start / span 12;

    ${respondTo.md(css`
      grid-column: col-start 5 / span 8;
    `)}
  `,
)
