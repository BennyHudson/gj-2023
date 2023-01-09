import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import Link from 'next/link'

import { StyledPodcastGridProps } from './PodcastGrid.style.types'

export const PodcastGrid = styled.div((props: StyledPodcastGridProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: ${props.theme.spacing[4]}px;
`)

export const FeaturedPodcast = styled.div((props: StyledPodcastGridProps): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 8;
  padding-right: ${props.theme.spacing[4]}px;
  border-right: 1px solid ${props.theme.colours.midGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`)

export const FeatureDetails = styled(Link)((): FlattenSimpleInterpolation => css`
  width: 100%;
  max-width: 460px;
  text-align: center;
  text-decoration: none;
  color: inherit;
`)

export const PodcastList = styled.ul((): FlattenSimpleInterpolation => css`
  grid-column: col-start 9 / span 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`)

export const Podcast = styled.li((props: StyledPodcastGridProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  gap: ${props.theme.spacing[4]}px;
  padding: ${props.theme.spacing[4]}px 0;
  border-bottom: 1px solid ${props.theme.colours.midGrey};

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
