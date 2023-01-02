import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledPodcastIntroProps } from './PodcastIntro.style.types'

export const PodcastIntro = styled.div((props: StyledPodcastIntroProps): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.white};
  border-bottom: 1px solid ${props.theme.colours.midGrey};
`)

export const Content = styled.div((props: StyledPodcastIntroProps): FlattenSimpleInterpolation => css`
  margin: 0 auto;
  width: 90%;
  max-width: ${props.theme.containerWidth}px;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  align-items: stretch;
`)

export const Intro = styled.div((props: StyledPodcastIntroProps): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 8;
  border-right: 1px solid ${props.theme.colours.midGrey};
  padding: ${props.theme.spacing[8]}px ${props.theme.spacing[8]}px ${props.theme.spacing[8]}px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`)

export const Host = styled.div((props: StyledPodcastIntroProps): FlattenSimpleInterpolation => css`
  grid-column: col-start 9 / span 4;
  padding: ${props.theme.spacing[8]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props.theme.spacing[4]}px;
  text-align: center;
`)
