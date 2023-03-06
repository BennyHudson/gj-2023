import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
// import Link from 'next/link'

import { StyledPostCarouselProps } from './PostCarousel.style.types'
import { CarouselPost } from '../components/CarouselPost/styles/CarouselPost.style'
import respondTo from '@mixins/respondTo'

export const PostCarousel = styled.div(
  (props: StyledPostCarouselProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.lightGrey};
    position: relative;
    border-bottom: 1px solid ${props.theme.colours.midGrey};
    width: 100%;
    overflow: hidden;
  `,
)

export const Container = styled.div(
  (props: StyledPostCarouselProps): FlattenSimpleInterpolation => css`
    width: 90%;
    margin: 0 auto;
    max-width: 1600px;
    position: relative;

    .slick-arrow {
      display: none !important;
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
        left: calc(100% + ${props.theme.spacing[2]}px);
      }

      &.slick-prev {
        right: calc(100% + ${props.theme.spacing[2]}px);

        &:hover {
          transform: translate(17.5%, -50%);
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
          left: calc(100% + ${props.theme.spacing[2]}px);
        }

        &.slick-prev {
          right: calc(100% + ${props.theme.spacing[2]}px);

          &:hover {
            transform: translate(17.5%, -50%);
          }
        }
      }
    `)}

    .slick-list {
      overflow: visible !important;
    }

    .slick-active {
      ${CarouselPost} {
        opacity: 1;
        pointer-events: auto;
      }
    }
  `,
)
