import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledQuickSubscribeProps } from './QuickSubscribe.style.types'

export const QuickSubscribe = styled.div((): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`)

export const ProductList = styled.div((props: StyledQuickSubscribeProps): FlattenSimpleInterpolation => css`
  border-top: 1px solid ${props.theme.colours.black};
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[2]}px;
  padding-top: ${props.theme.spacing[4]}px;
  margin: ${props.theme.spacing[4]}px 0;
  width: 100%;
`)

export const Product = styled.button((props: StyledQuickSubscribeProps): FlattenSimpleInterpolation => css`
  text-align: left;
  background: none;
  border: none;
  position: relative;
  padding-left: ${props.theme.spacing[2] * 2}px;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: ${props.theme.spacing[2]}px;
    height: ${props.theme.spacing[2]}px;
    background: none;
    border-radius: 50%;
    border: 2px solid ${props.theme.colours.black};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    content: '';
    display: block;
    width: ${props.theme.spacing[1]}px;
    height: ${props.theme.spacing[1]}px;
    background: ${props.theme.colours.white};
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(75%, -50%);
  }

  ${props.$active && css`
    &::before {
      background: ${props.theme.colours.green};
    }
  `}
`)
