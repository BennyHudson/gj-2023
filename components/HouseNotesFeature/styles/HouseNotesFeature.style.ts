import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledHouseNotesFeatureProps } from './HouseNotesFeature.style.types'
import respondTo from '@mixins/respondTo'

export const FeatureColumn = styled.div((props: StyledHouseNotesFeatureProps): FlattenSimpleInterpolation => css`
  position: relative;
  border-bottom: 1px solid ${props.theme.colours.midGrey};
  padding-bottom: ${props.theme.spacing[2]}px;

  &:nth-child(4) {
    padding: ${props.theme.spacing[4]}px 5%;
    border-top: 2px solid ${props.theme.colours.yellow};
    border-bottom: 2px solid ${props.theme.colours.yellow};
  }

  ${respondTo.md(css`
    border-bottom: none;
    padding-bottom: 0;

    &::after {
      content: '';
      position: absolute;
      width: 1px;
      background: ${props.theme.colours.midGrey};
      top: 0;
      height: 100%;
      left: -${props.theme.spacing[2]}px;
    }

    &:nth-child(1),
    &:nth-child(4),
    &:nth-child(5) {
      &::after {
        display: none;
      }
    }

    &:nth-child(1),
    &:nth-child(5) {
      grid-column: col-start / span 4;
    }

    &:nth-child(2),
    &:nth-child(6) {
      grid-column: col-start 5 / span 4;
    }

    &:nth-child(3),
    &:nth-child(7) {
      grid-column: col-start 9 / span 4;
    }

    &:nth-child(4) {
      grid-column: col-start / span 12;
      padding: ${props.theme.spacing[4]}px 0;
    }
  `)}
`)

export const FeatureTitle = styled.div((props: StyledHouseNotesFeatureProps): FlattenSimpleInterpolation => css`
  font-size: ${props.theme.typography.heading[1].fontSize};
  line-height: ${props.theme.typography.heading[1].lineHeight};
  font-family: 'Cera Pro Bold';
  text-align: center;
  margin-bottom: ${props.theme.spacing[4]}px;

  span {
    display: inline-block;
    border-bottom: 2px solid ${props.theme.colours.yellow};
  }

  &::before,
  &::after {
    display: inline-block;
  }

  &::before {
    content: '(';
  }

  &::after {
    content: ')';
  }
`)

export const HouseNotesFeature = styled.div((props: StyledHouseNotesFeatureProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${props.theme.spacing[2]}px;
  border-top: 1px solid ${props.theme.colours.midGrey};
  border-bottom: 1px solid ${props.theme.colours.midGrey};
  padding: ${props.theme.spacing[4]}px 0;

  ${respondTo.md(css`
    grid-template-columns: repeat(12, [col-start] 1fr);
    gap: ${props.theme.spacing[4]}px;
  `)}
`)

export const FeaturedPost = styled.div((props: StyledHouseNotesFeatureProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[2]}px;
`)

export const ArticleType = styled.div((props: StyledHouseNotesFeatureProps): FlattenSimpleInterpolation => css`
  font-size: ${props.theme.typography.paragraph[2].fontSize};
  line-height: ${props.theme.typography.paragraph[2].lineHeight};
  font-family: 'Cera Pro Bold';

  span {
    display: inline-block;
    border-bottom: 2px solid ${props.theme.colours.yellow};
  }

  &::before,
  &::after {
    display: inline-block;
  }

  &::before {
    content: '(';
  }

  &::after {
    content: ')';
  }
`)

export const Quote = styled.div((): FlattenSimpleInterpolation => css`
  width: 90%;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
`)
