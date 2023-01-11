import React, { ReactElement, FC, useContext } from 'react'

import PageContext, { PageContextProps } from '@context/PageContext'

import Heading from '@components/typography/Heading'
import Paragraph from '@components/typography/Paragraph'
import EditButton from '@components/EditButton'
import Button from '@components/interactions/Button'

import * as Styled from './styles/Cart.style'


const Cart: FC = (): ReactElement => {
  const { cart, setCart } = useContext(PageContext) as PageContextProps
  console.log(cart)
  return (
    <Styled.Cart>
      <Heading size={5} text='Cart' font='ChronicleCondensed' />
      {cart.length ?
        <>
          <Styled.CartItems>
            {cart.map((cartItem, index) => {
              return (
                <Styled.CartItem key={index}>
                  <div>
                    <Heading size={2} font='ChronicleCondensed' text={cartItem.name} />
                    <Paragraph size={2} font='Cera'>£{cartItem.price ? cartItem.price : '0.00 - A free gift from us to you.'}</Paragraph>
                  </div>
                  {index === 0 && <EditButton onClick={() => setCart([])} text='Remove' />}
                </Styled.CartItem>
              )
            })}
          </Styled.CartItems>
          <Button href='/checkout' text='Checkout now' size={1} />
        </>
        :
        <Paragraph size={2} font='Cera'>Your cart is empty</Paragraph>
      }
    </Styled.Cart>
  )
}

export default Cart
