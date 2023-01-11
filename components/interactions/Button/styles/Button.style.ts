import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledButtonProps } from './Button.style.types'

export const Button = styled.button((props: StyledButtonProps): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.midGrey};
  border: none;
  color: ${props.theme.colours.black};
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  padding: ${props.size === 2 ? props.theme.spacing[2] : props.theme.spacing[1] * 1.5}px ${props.size === 2 ? props.theme.spacing[6] : props.theme.spacing[4]}px;
  border-radius: 2px;
  font-family: 'Cera Pro Semibold', sans-serif;
  text-decoration: none;
  display: inline-block;
  // font-weight: 600;

  ${props.size === 2 && css`
    text-transform: uppercase;
  `}
`)
