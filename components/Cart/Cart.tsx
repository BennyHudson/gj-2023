import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/Cart.style'

import { CartProps } from './Cart.types'

const Cart: FC<CartProps> = ({
  children,
}: CartProps): ReactElement => {
  return (
    <Styled.Cart>
      Component Cart
    </Styled.Cart>
  )
}

export default Cart
