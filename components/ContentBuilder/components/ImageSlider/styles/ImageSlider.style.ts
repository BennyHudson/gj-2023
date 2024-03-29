import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledImageSliderProps } from './ImageSlider.style.types'

export const Slide = styled.div(
  (props: StyledImageSliderProps): FlattenSimpleInterpolation => css`
    ${respondTo.md(css`
      padding: 0 ${props.theme.spacing[1]}px;
    `)}

    transition: 0.4s all ease;
  `,
)

export const ImageSlider = styled.div(
  (props: StyledImageSliderProps): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    position: relative;

    ${Slide} {
      opacity: 0.2;
      pointer-events: none;
    }

    &::before {
      content: '';
      position: absolute;
      right: 100%;
      top: 50%;
      height: calc(100% + 10px);
      width: 6000px;
      background: ${props.theme.colours.white};
      transform: translateY(-50%);
      z-index: 1;
    }

    .slick-arrow {
      display: none !important;
    }

    .slick-dots {
      display: flex !important;
      width: 100%;
      justify-content: center;
      gap: ${props.theme.spacing[1]}px;
      padding: ${props.theme.spacing[4]}px 0 0;

      button {
        display: none !important;
      }

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

    ${respondTo.md(css`
      .slick-arrow {
        display: block !important;
        background: ${props.theme.colours.white};
        border-radius: 50%;
        color: ${props.theme.colours.black};
        z-index: 10;
        transition: 0.4s all ease;
        transform-origin: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: ${props.theme.spacing[3]}px;
        height: ${props.theme.spacing[3]}px;
        cursor: pointer;

        &:hover {
          color: ${props.theme.colours.white};
          background: ${props.theme.colours.black};
          transform: translate(-17.5%, -50%);
          width: ${props.theme.spacing[4]}px;
          height: ${props.theme.spacing[4]}px;
        }

        &.slick-next {
          left: calc(100% + ${props.theme.spacing[4]}px);
        }

        &.slick-prev {
          right: calc(100% + ${props.theme.spacing[4]}px);

          &:hover {
            transform: translate(17.5%, -50%);
          }
        }
      }
    `)}

    ${respondTo.md(css`
      .slick-list {
        overflow: visible !important;
      }
    `)}

    .slick-track {
      display: flex !important;
    }

    .slick-disabled {
      display: none !important;
    }

    .slick-active {
      ${Slide} {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .slick-slide {
      height: inherit !important;
      display: flex !important;

      img {
        width: 100%;
      }

      & > div {
        display: flex;
        width: 100%;
      }
    }
  `,
)
