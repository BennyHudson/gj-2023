import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledButtonProps } from './Button.style.types'

export const Button = styled.button((props: StyledButtonProps): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.midGrey};
  border: none;
  color: ${props.theme.colours.black};
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  padding: ${props.theme.spacing[2]}px ${props.theme.spacing[6]}px;
  border-radius: 2px;
  font-family: 'Cera Pro Semibold', sans-serif;
  text-transform: uppercase;
  // font-weight: 600;
`)
