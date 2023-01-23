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
      grid-template-columns: repeat(${props.columns}, 1fr);
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
