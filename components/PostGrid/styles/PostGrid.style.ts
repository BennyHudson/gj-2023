import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPostGridProps } from './PostGrid.style.types'
import respondTo from '@mixins/respondTo'
import { PostExcerpt } from '@components/PostExcerpt/styles/PostExcerpt.style'

export const PostGrid = styled.div(
  (props: StyledPostGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-column: col-start / span 12;
    grid-template-columns: repeat(1, 1fr);
    gap: ${props.theme.spacing[4]}px;
    margin-bottom: ${props.theme.spacing[8]}px;

    ${respondTo.md(css`
      grid-template-columns: repeat(3, 1fr);
      width: 90%;
      margin: 0 auto;
    `)}

    ${respondTo.lg(css`
      grid-template-columns: repeat(${props.columns}, 1fr);
      width: 100%;
    `)}

    &:last-child {
      margin-bottom: 0;
    }
  `,
)

export const PostCarousel = styled.div(
  (props: StyledPostGridProps): FlattenSimpleInterpolation => css`
    width: 100%;
    overflow: hidden;

    button {
      display: none !important;
    }

    .slick-list {
      width: 90vw;
      overflow: visible;
    }

    ${PostExcerpt} {
      display: block;
      padding-left: 5vw;
    }

    .slick-dots {
      display: flex !important;
      width: 100%;
      justify-content: center;
      gap: ${props.theme.spacing[1]}px;
      padding: ${props.theme.spacing[4]}px 0 0;

      li {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${props.theme.colours.midGrey};

        &.slick-active {
          background: ${props.theme.colours.black};
        }
      }
    }
  `,
)

export const TowerAdvert = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: center;

    ${respondTo.lg(css`
      grid-row: 1 / span 2;
      grid-column: 4;
    `)}
  `,
)
