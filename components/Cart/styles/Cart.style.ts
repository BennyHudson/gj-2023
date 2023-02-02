import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledCartProps } from './Cart.style.types'

export const Cart = styled.div((props: StyledCartProps): FlattenSimpleInterpolation => css`
  ${props.viewOnly && css`
    background: ${props.theme.colours.lightGrey};
    padding: ${props.theme.spacing[4]}px;
    margin-bottom: ${props.theme.spacing[4]}px;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`)

export const CartItems = styled.div(
  (props: StyledCartProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[4]}px;
    margin-bottom: ${props.theme.spacing[8]}px;

    &:last-child {
      margin-bottom: 0;
    }
  `,
)
