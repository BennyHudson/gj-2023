import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { Section, Content } from '@components/Section/styles/Section.style'

import { StyledFeatureCarouselProps } from './FeatureCarousel.style.types'

export const FeatureCarousel = styled.div((props: StyledFeatureCarouselProps): FlattenSimpleInterpolation => css`
  height: calc(100vh - ${props.headerHeight}px);
  display: flex;
  position: relative;

  ${Section} {
    width: 100%;
    display: flex;
  }

  ${Content} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`)

export const ImageWrapper = styled.div((): FlattenSimpleInterpolation => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`)

export const Title = styled.div((props: StyledFeatureCarouselProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: ${props.theme.spacing[8]}px;
  max-width: 40%;
`)

export const Thumbs = styled.ul((props: StyledFeatureCarouselProps): FlattenSimpleInterpolation => css`
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
`)

export const Index = styled.span((props: StyledFeatureCarouselProps): FlattenSimpleInterpolation => css`
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

  ${props.active && css`
    background: ${props.theme.colours.white};
    color: ${props.theme.colours.black}
  `}
`)

export const Thumb = styled.button((props: StyledFeatureCarouselProps): FlattenSimpleInterpolation => css`
  background: none;
  border: none;
  color: ${props.theme.colours.white};
  font-family: inherit;
  text-align: left;
  padding-right: ${props.theme.spacing[2]}px;
  cursor: pointer;
`)
