import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledCartItemProps } from './CartItem.style.types'

export const CartItem = styled.div(
  (props: StyledCartItemProps): FlattenSimpleInterpolation => css`
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
