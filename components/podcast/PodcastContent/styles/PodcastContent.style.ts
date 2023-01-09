import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPodcastContentProps } from './PodcastContent.style.types'

export const Header = styled.div((props: StyledPodcastContentProps): FlattenSimpleInterpolation => css`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props.theme.spacing[6]}px;
  margin-bottom: ${props.theme.spacing[6]}px;
`)

export const Player = styled.div((props: StyledPodcastContentProps): FlattenSimpleInterpolation => css`
  width: 100%;
  margin-bottom: ${props.theme.spacing[6]}px;
  padding: ${props.theme.spacing[4]}px 0;
  border-top: 1px solid ${props.theme.colours.midGrey};
  border-bottom: 1px solid ${props.theme.colours.midGrey};

  audio {
    width: 100%;
    display: block;
  }
`)

export const Content = styled.div((props: StyledPodcastContentProps): FlattenSimpleInterpolation => css`
  width: 100%;
  margin-bottom: ${props.theme.spacing[6]}px;

  audio {
    width: 100%;
    display: block;
  }
`)

export const PodcastMeta = styled.div((props: StyledPodcastContentProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props.theme.spacing[4]}px 0;
  border-top: 1px solid ${props.theme.colours.midGrey};
  border-bottom: 1px solid ${props.theme.colours.midGrey};
  gap: ${props.theme.spacing[4]}px;
`)
