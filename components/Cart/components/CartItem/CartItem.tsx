import React, { ReactElement, FC, useContext } from 'react'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import EditButton from '@components/EditButton'

import * as Styled from './styles/CartItem.style'

import { CartItemProps } from './CartItem.types'
import PageContext, { PageContextProps } from '@context/PageContext'
import { useQuery } from '@apollo/client'
import { productQuery } from '@queries/products/product'

const CartItem: FC<CartItemProps> = ({
  productId,
  removeable,
}: CartItemProps): ReactElement => {
  const { setCart } = useContext(PageContext) as PageContextProps

  const { data } = useQuery(productQuery(productId).query)

  const clearCart = () => {
    setCart([])
    localStorage.removeItem('cart')
  }

  return (
    <Styled.CartItem>
      {data &&
        <>
          <div>
            <Heading size={2} font='ChronicleCondensed' text={data.product.name} />
            <Paragraph size={2} font='Cera'>
              £{data.product.price ? data.product.price : '0.00 - A free gift from us to you.'}
            </Paragraph>
          </div>
          {removeable && <EditButton onClick={clearCart} text='Remove' />}
        </>
      }
    </Styled.CartItem>
  )
}

export default CartItem
