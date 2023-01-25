import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { PodcastCard } from '@components/PodcastCard/styles/PodcastCard.style'

import { StyledPodcastCarouselProps } from './PodcastCarousel.style.types'
import respondTo from '@mixins/respondTo'

export const PodcastCarousel = styled.div(
  (props: StyledPodcastCarouselProps): FlattenSimpleInterpolation => css`
    width: 100%;
    overflow: hidden;

    ${respondTo.lg(css`
      margin: 0 -${props.theme.spacing[2]}px;
      
      ${PodcastCard} {
        opacity: 0.2;
        pointer-events: none;
      }
    `)}

    .slick-arrow {
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
        left: 100%;
      }

      &.slick-prev {
        right: 100%;

        &:hover {
          transform: translate(17.5%, -50%);
        }
      }
    }

    .slick-list {
      overflow: visible !important;
    }

    .slick-track {
      display: flex !important;
    }

    .slick-slide {
      height: inherit !important;
      display: flex !important;

      & > div {
        display: flex;
        width: 100%;
      }
    }

    .slick-active {
      ${PodcastCard} {
        opacity: 1;
        pointer-events: auto;
      }
    }

    ${respondTo.lg(css`
      .slick-current {
        ${PodcastCard} {
          transform: scale(1.05);
        }
      }
    `)}
  `,
)
