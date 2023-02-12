import React, { ReactElement, FC, useContext } from 'react'

import PageContext, { PageContextProps } from '@context/PageContext'

import Paragraph from '@components/Paragraph'
import Button from '@components/Button'

import CartItem from './components/CartItem'

import * as Styled from './styles/Cart.style'

import { CartProps } from './Cart.types'
import EditButton from '@components/EditButton'

const Cart: FC<CartProps> = ({ viewOnly = false}: CartProps): ReactElement => {
  const { cart } = useContext(PageContext) as PageContextProps

  return (
    <Styled.Cart viewOnly={viewOnly}>
      {cart.length ? (
        <>
          <Styled.CartItems>
            {cart.map((cartItem, index) => {
              return (
                <CartItem productId={cartItem} removeable={index === 0 && !viewOnly} key={index} />
              )
            })}
          </Styled.CartItems>
          {!viewOnly && <Button href='/checkout' text='Checkout now' size={1} />}
        </>
      ) : (
        <>
          <Paragraph size={2} font='Cera'>Your cart is empty</Paragraph>
          <EditButton href='/club' text='Sign Up' />
        </>
      )}
    </Styled.Cart>
  )
}

export default Cart
