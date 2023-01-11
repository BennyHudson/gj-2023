import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledLoginModalProps } from './LoginModal.style.types'

export const LoginModal = styled.div((props: StyledLoginModalProps): FlattenSimpleInterpolation => css`
  width: 100%;
`)

export const Tabs = styled.div((props: StyledLoginModalProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: ${props.theme.spacing[8]}px;
  width: 100%;
`)

export const Tab = styled.button((props: StyledLoginModalProps): FlattenSimpleInterpolation => css`
  background: none;
  font-family: 'Cera Pro Semibold';
  padding: ${props.theme.spacing[2]}px ${props.theme.spacing[4]}px;
  border: none;
  font-size: ${props.theme.typography.heading[1].fontSize};
  line-height: ${props.theme.typography.heading[1].lineHeight};
  cursor: pointer;

  ${props.$active && css`
    border-bottom: 1px solid ${props.theme.colours.black};
  `}
`)
