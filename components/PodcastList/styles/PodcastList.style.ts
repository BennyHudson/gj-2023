import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPodcastListProps } from './PodcastList.style.types'

export const PodcastList = styled.ul((): FlattenSimpleInterpolation => [])

export const Podcast = styled.li((props: StyledPodcastListProps): FlattenSimpleInterpolation => css`
  padding: ${props.theme.spacing[4]}px 0;
  border-bottom: 1px solid ${props.theme.colours.grey};
  display: flex;
  align-items: center;
  gap: ${props.theme.spacing[4]}px;
  width: 100%;

  & > div {
    flex-grow: 1;
  }

  &:first-child {
    padding-top: 0;
  }
`)

export const PodcastMeta = styled.div((props: StyledPodcastListProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${props.theme.spacing[4]}px;
`)