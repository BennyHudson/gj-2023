import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledMastheadProps } from './Masthead.style.types'

export const Masthead = styled.div((props: StyledMastheadProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  margin-bottom: ${props.theme.spacing[8]}px;
`)

export const MastheadContent = styled.div((props: StyledMastheadProps): FlattenSimpleInterpolation => css`
  grid-column: col-start 4 / span 5;
  text-align: center;

  ${props.fullWidth && css`
    grid-column: col-start / span 8;
    text-align: left;
  `}
`)
