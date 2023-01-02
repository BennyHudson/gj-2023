import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledButtonBlockProps } from './ButtonBlock.style.types'

export const ButtonBlock = styled.div((props: StyledButtonBlockProps): FlattenSimpleInterpolation => css`
  border-top: 1px solid ${props.theme.colours.grey};
  border-bottom: 1px solid ${props.theme.colours.grey};
  padding: ${props.theme.spacing[2]}px 0;
  display: flex;
  align-items: center;
  grid-column: col-start 3 / span 7;

  &:last-child {
    margin-bottom: 0;
  }
`)

export const Button = styled.a((props: StyledButtonBlockProps): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.midGrey};
  border: none;
  color: ${props.theme.colours.black};
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  padding: ${props.theme.spacing[1]}px ${props.theme.spacing[2]}px;
  border-radius: 2px;
  font-family: 'Cera Pro Semibold', sans-serif;
  text-transform: uppercase;
  margin-left: auto;
  font-size: ${props.theme.typography.paragraph[1].fontSize};
  transition: 0.4s all ease;
  text-decoration: none;

  &:hover {
    background: ${props.theme.colours.black};
    color: ${props.theme.colours.white};
  }
`)
