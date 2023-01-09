import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledSessionsFeatureProps } from './SessionsFeature.style.types'

export const SessionsFeature = styled.div((props: StyledSessionsFeatureProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: ${props.theme.spacing[8]}px;
  padding: ${props.theme.spacing[4]}px 0;
`)

export const Content = styled.div((props: StyledSessionsFeatureProps): FlattenSimpleInterpolation => css`
  grid-column: col-start / span 4;
  border-top: 1px solid ${props.theme.colours.grey};
  border-bottom: 1px solid ${props.theme.colours.grey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props.theme.spacing[4]}px 0;
  gap: ${props.theme.spacing[4]}px;
`)

export const Thumbnail = styled.div((): FlattenSimpleInterpolation => css`
  grid-column: col-start 5 / span 8;
`)