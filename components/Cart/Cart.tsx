import type { FC, ReactElement} from 'react'
import React, { useContext } from 'react'

import Button from '@components/Button'
import EditButton from '@components/EditButton'
import Paragraph from '@components/Paragraph'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { CartProps } from './Cart.types'
import CartItem from './components/CartItem'
import * as Styled from './styles/Cart.style'

const Cart: FC<CartProps> = ({ viewOnly = false, voucher }: CartProps): ReactElement => {
  const { cart } = useContext(PageContext) as PageContextProps

  return (
    <Styled.Cart viewOnly={viewOnly}>
      {cart.length ? (
        <>
          <Styled.CartItems>
            {cart.map((cartItem, index) => {
              return <CartItem productId={cartItem} removeable={index === 0 && !viewOnly} key={index} voucher={voucher} />
            })}
          </Styled.CartItems>
          {!viewOnly && <Button href='/checkout' text='Checkout now' size={1} />}
        </>
      ) : (
        <>
          <Paragraph size={2} font='Cera'>
            Your cart is empty
          </Paragraph>
          <EditButton href='/club' text='Sign Up' />
        </>
      )}
    </Styled.Cart>
  )
}

export default Cart
