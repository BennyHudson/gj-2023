import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledSharersProps } from './Sharers.style.types'

export const Sharers = styled.div((props: StyledSharersProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
  gap: ${props.theme.spacing[2]}px;
`)

export const Sharer = styled.a((props: StyledSharersProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
  font-size: ${props.theme.typography.heading[2].fontSize};
  line-height: ${props.theme.typography.heading[2].lineHeight};
  color: ${props.theme.colours.grey};
`)