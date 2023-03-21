import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledToolbarProps } from './Toolbar.style.types'

export const Toolbar = styled.div((props: StyledToolbarProps): FlattenSimpleInterpolation => css`
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 100;
  background: ${props.theme.colours.black};
  transform: translateX(-50%);
  border-radius: 6px 6px 0 0;
  box-shadow: 0 0 12px 0 rgba(0,0,0,0.1);
  font-size: ${props.theme.typography.paragraph[2].fontSize};
  line-height: ${props.theme.typography.paragraph[2].lineHeight};
  font-family: 'Cera Pro Regular';
  display: flex;
  align-items: center;
  justify-content: center;
`)

export const Link = styled.a((props: StyledToolbarProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props.theme.spacing[1]}px;
  border-right: 1px solid ${props.theme.colours.white};
  padding: ${props.theme.spacing[1]}px ${props.theme.spacing[2]}px;
  color: ${props.theme.colours.white};
  text-decoration: none;
  transition: 0.4s all ease;

  &:first-child {
    border-radius: 6px 0 0 0;
  }

  &:last-child {
    border-radius: 0 6px 0 0;
    border-right: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`)
