import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledGiftGridProps } from './GiftGrid.style.types'
import respondTo from '@mixins/respondTo'
import { Thumbnail } from '@components/Thumbnail/styles/Thumbnail.style'

export const GiftGrid = styled.div(
  (props: StyledGiftGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${props.theme.spacing[2]}px;
    width: 90%;
    margin: 0 auto ${props.theme.spacing[4]}px;

    ${respondTo.lg(css`
      grid-template-columns: repeat(4, 1fr);
      gap: ${props.theme.spacing[4]}px;
      margin: 0 auto ${props.theme.spacing[8]}px;
    `)}

    &:last-child {
      margin-bottom: 0;
    }
  `,
)

export const GiftItem = styled.a(
  (props: StyledGiftGridProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[1]}px;
    color: ${props.theme.colours.black};
    text-decoration: none;
    padding: 0 ${props.theme.spacing[2]}px;

    ${Thumbnail} {
      margin: 0 -${props.theme.spacing[2]}px;
      width: calc(100% + ${props.theme.spacing[2] * 2}px);
      max-width: 200%;

      ${respondTo.md(css`
        margin: 0;
        width: 100%;
        max-width: 100%;
      `)}
    }

    ${respondTo.md(css`
      padding: 0;
    `)}
  `,
)
