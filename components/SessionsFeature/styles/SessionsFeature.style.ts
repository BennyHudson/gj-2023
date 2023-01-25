import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledSessionsFeatureProps } from './SessionsFeature.style.types'
import respondTo from '@mixins/respondTo'

export const SessionsFeature = styled.div(
  (props: StyledSessionsFeatureProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    gap: ${props.theme.spacing[2]}px;
    width: 90%;
    margin: 0 auto;

    ${respondTo.lg(css`
      width: 100%;
      padding: ${props.theme.spacing[4]}px 0;
      gap: ${props.theme.spacing[8]}px;
    `)}
  `,
)

export const Content = styled.div(
  (props: StyledSessionsFeatureProps): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    gap: ${props.theme.spacing[4]}px;

    ${respondTo.lg(css`
      grid-column: col-start / span 5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-top: 1px solid ${props.theme.colours.grey};
      border-bottom: 1px solid ${props.theme.colours.grey};
      padding: ${props.theme.spacing[4]}px 0;
    `)}
  `,
)

export const Thumbnail = styled.div(
  (): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    display: flex;
    align-items: center;

    ${respondTo.lg(css`
      grid-column: col-start 6 / span 7;
    `)}
  `,
)
