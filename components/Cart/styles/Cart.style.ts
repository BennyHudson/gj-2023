import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledCartProps } from './Cart.style.types'

export const Cart = styled.div(
  (props: StyledCartProps): FlattenSimpleInterpolation => css`
    ${props.viewOnly &&
    css`
      background: ${props.theme.colours.lightGrey};
      padding: ${props.theme.spacing[4]}px;
      margin-bottom: ${props.theme.spacing[4]}px;

      &:last-child {
        margin-bottom: 0;
      }
    `}
  `,
)

type CartItemsProps = Pick<StyledCartProps, 'theme'>
export const CartItems = styled.div(
  (props: CartItemsProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[4]}px;
    margin-bottom: ${props.theme.spacing[8]}px;

    &:last-child {
      margin-bottom: 0;
    }
  `,
)

type CartItemProps = Pick<StyledCartProps, 'theme'>
export const CartItem = styled.div(
  (props: CartItemProps): FlattenSimpleInterpolation => css`
    border-bottom: 1px solid ${props.theme.colours.midGrey};
    padding-bottom: ${props.theme.spacing[4]}px;
    display: flex;
    align-items: flex-start;
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
