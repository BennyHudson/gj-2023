import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import Link from 'next/link'

import { StyledPodcastGridProps } from './PodcastGrid.style.types'
import respondTo from '@mixins/respondTo'

export const PodcastGrid = styled.div((props: StyledPodcastGridProps): FlattenSimpleInterpolation => css`
  ${respondTo.md(css`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    gap: ${props.theme.spacing[4]}px;
  `)}
`)

export const FeaturedPodcast = styled.div((props: StyledPodcastGridProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  margin: 0 auto;

  ${respondTo.md(css`
    width: 100%;
    grid-column: col-start / span 8;
    padding-right: ${props.theme.spacing[4]}px;
    border-right: 1px solid ${props.theme.colours.midGrey};
  `)}
`)

export const FeatureDetails = styled(Link)((): FlattenSimpleInterpolation => css`
  max-width: 460px;
  text-align: center;
  text-decoration: none;
  color: inherit;

  ${respondTo.md(css`
    width: 100%;
  `)}
`)

export const PodcastList = styled.ul((): FlattenSimpleInterpolation => css`
  grid-column: col-start 9 / span 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`)

export const Podcast = styled.li((props: StyledPodcastGridProps): FlattenSimpleInterpolation => css`
  grid-template-columns: 1fr 4fr;
  align-items: center;
  gap: ${props.theme.spacing[4]}px;
  padding: ${props.theme.spacing[4]}px 0;
  border-bottom: 1px solid ${props.theme.colours.midGrey};
  display: block;
  padding-left: 5vw;

  ${respondTo.md(css`
    display: grid;
    width: 100%;
    padding-left: 0;
  `)}

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }
`)

export const PodcastDetails = styled(Link)((): FlattenSimpleInterpolation => css`
  text-decoration: none;
  color: inherit;
`)

export const PostCarousel = styled.div((props: StyledPodcastGridProps): FlattenSimpleInterpolation => css`
  width: 100%;
  padding-top: ${props.theme.spacing[4]}px;
  overflow: hidden;

  button {
    display: none !important;
  }

  .slick-list {
    width: 90vw;
    overflow: visible;
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
`)
