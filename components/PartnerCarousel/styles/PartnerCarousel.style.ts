import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledPartnerCarouselProps } from './PartnerCarousel.style.types'

export const PartnerCard = styled.div((props: StyledPartnerCarouselProps): FlattenSimpleInterpolation => css`
  padding: 0 ${props.theme.spacing[2]}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  opacity: 0.2;
  scale: 0.8;
  transition: 0.4s all ease;
  filter: grayscale(100%);
`)

export const PartnerCarousel = styled.div((props: StyledPartnerCarouselProps): FlattenSimpleInterpolation => css`
  text-align: center;
  padding: ${props.theme.spacing[4]}px 0;
  position: relative;
  width: 90%;
  margin: 0 auto;

  ${respondTo.lg(css`
    width: 100%;
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

  ${respondTo.lg(css`
    .slick-list {
      overflow: visible !important;
    }
  `)}

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
    ${PartnerCard} {
      opacity: 1;
      pointer-events: auto;
      scale: 1;
      filter: none;
    }
  }

  button {
    display: none !important;
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
      background: ${props.theme.colours.grey};

      &.slick-active {
        background: ${props.theme.colours.white};
      }
    }
  }
`)

export const PartnerContent = styled.div((props: StyledPartnerCarouselProps): FlattenSimpleInterpolation => css`
  padding: ${props.theme.spacing[2]}px ${props.theme.spacing[1]}px 0;
`)
