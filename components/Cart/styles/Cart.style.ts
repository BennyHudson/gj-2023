import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledCartProps } from './Cart.style.types'

export const Cart = styled.div((): FlattenSimpleInterpolation => [])

export const CartItems = styled.div(
  (props: StyledCartProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[4]}px;
    margin-bottom: ${props.theme.spacing[8]}px;
  `,
)

export const CartItem = styled.div(
  (props: StyledCartProps): FlattenSimpleInterpolation => css`
    border-bottom: 1px solid ${props.theme.colours.midGrey};
    padding-bottom: ${props.theme.spacing[4]}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${props.theme.spacing[4]}px;

    & > div {
      flex-grow: 1;
    }

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  `,
)
