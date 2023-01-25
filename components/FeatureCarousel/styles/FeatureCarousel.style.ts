import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Section, Content } from '@components/Section/styles/Section.style'
import { Title } from '@components/Title/styles/Title.style'

import { StyledFeatureCarouselProps } from './FeatureCarousel.style.types'
import respondTo from '@mixins/respondTo'

type ThemeProps = Pick<StyledFeatureCarouselProps, 'theme'>

type FeatureCarouselProps = Pick<StyledFeatureCarouselProps, 'headerHeight' | 'height' | 'theme'>
export const FeatureCarousel = styled.div(
  (props: FeatureCarouselProps): FlattenSimpleInterpolation => css`
    height: ${props.height === 2 ? '100vh' : `calc(100vh - ${props.headerHeight}px)`};
    display: flex;
    position: relative;
    background: ${props.theme.colours.black};

    ${props.height === 2 &&
    css`
      ${Title} {
        margin-top: ${props.headerHeight}px;

        ${respondTo.lg(css`
          margin-top: 0;
        `)}
      }

      ${respondTo.lg(css`
        padding-top: ${props.headerHeight}px;
      `)}
    `}

    ${Section} {
      width: 100%;
      display: flex;
      position: relative;
      z-index: 2;
      background: none;
      padding: 0;

      ${respondTo.lg(css`
        padding-top: ${props.theme.spacing[8]}px;
      `)}
    }

    ${Content} {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    ${Title} {
      position: relative;
      z-index: 10;
    }
  `,
)

export const ImageWrapper = styled.div(
  (): FlattenSimpleInterpolation => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
    }
  `,
)

export const PostTitle = styled.div(
  (props: ThemeProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    z-index: 10;

    ${respondTo.lg(css`
      max-width: 40%;
      padding-bottom: ${props.theme.spacing[8]}px;
    `)}
  `,
)

type ThumbsProps = Pick<StyledFeatureCarouselProps, 'count' | 'theme' | 'activeIndex'>
export const Thumbs = styled.ul(
  (props: ThumbsProps): FlattenSimpleInterpolation => css`
    width: 100%;
    border-top: 1px solid ${props.theme.colours.grey};
    position: relative;
    display: flex;
    z-index: 1;

    &::before {
      transition: 0.4s all ease;
      content: '';
      display: block;
      height: 2px;
      position: absolute;
      top: 0;
      width: calc(100% / ${props.count});
      background: ${props.theme.colours.white};
      left: ${props.activeIndex * (100 / props.count)}%;
    }

    li {
      width: calc(100% / ${props.count});
      display: flex;
      align-items: flex-start;
      padding: ${props.theme.spacing[4]}px 0;
    }
  `,
)

export const Slider = styled.div(
  (props: StyledFeatureCarouselProps): FlattenSimpleInterpolation => css`
    position: absolute;
    top: -${props.theme.spacing[4]}px;
    left: 0;
    right: 0;
    bottom: -${props.theme.spacing[4]}px;

    ${respondTo.md(css`
      top: 0;
      bottom: 0;
    `)}

    .slick-slider,
    .slick-list,
    .slick-track {
      height: 100%;
    }

    .slick-slide {
      & > div {
        height: 100%;
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
      position: absolute;
      bottom: ${props.theme.spacing[4]}px;
      z-index: 10;

      li {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${props.theme.colours.midGrey};

        &.slick-active {
          background: ${props.theme.colours.white};
        }
      }
    }
  `,
)

export const Slide = styled.div(
  (props: StyledFeatureCarouselProps): FlattenSimpleInterpolation => css`
    position: relative;
    height: 100%;
    padding: ${props.theme.spacing[8]}px 5%;
    display: flex !important;
    align-items: flex-end;

    img {
      object-fit: cover;
    }
  `,
)

type IndexProps = Pick<StyledFeatureCarouselProps, 'theme' | '$isActive'>
export const Index = styled.span(
  (props: IndexProps): FlattenSimpleInterpolation => css`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: ${props.theme.colours.white};
    padding: ${props.theme.spacing[1]}px;
    margin-right: ${props.theme.spacing[2]}px;
    border: 1px solid ${props.theme.colours.white};
    min-width: 30px;
    height: 30px;
    font-size: ${props.theme.typography.paragraph[1].fontSize};
    line-height: 1;
    border-radius: 50%;
    transition: 0.4s all ease;

    ${props.$isActive &&
    css`
      background: ${props.theme.colours.white};
      color: ${props.theme.colours.black};
    `}
  `,
)

export const Thumb = styled.button(
  (props: ThemeProps): FlattenSimpleInterpolation => css`
    background: none;
    border: none;
    color: ${props.theme.colours.white};
    font-family: inherit;
    text-align: left;
    padding-right: ${props.theme.spacing[2]}px;
    cursor: pointer;
  `,
)
