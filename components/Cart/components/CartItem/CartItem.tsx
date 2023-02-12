import React, { ReactElement, FC, useContext } from 'react'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import EditButton from '@components/EditButton'

import * as Styled from './styles/CartItem.style'

import { CartItemProps } from './CartItem.types'
import PageContext, { PageContextProps } from '@context/PageContext'
import { useQuery } from '@apollo/client'
import { productQuery } from '@queries/products/product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/pro-light-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const CartItem: FC<CartItemProps> = ({
  productId,
  removeable,
}: CartItemProps): ReactElement => {
  const { setCart, shippingRate } = useContext(PageContext) as PageContextProps

  const { data } = useQuery(productQuery(productId).query)

  const clearCart = () => {
    setCart([])
    localStorage.removeItem('cart')
  }

  const getProductPrice = (productData) => {
    const { signUpFee, regularPrice, salePrice, subscriptionPeriod, subscriptionPrice } = productData.product
    const onSale = parseFloat(salePrice) > parseFloat(signUpFee)
    if (signUpFee) return `${parseFloat(signUpFee)} ${onSale ? 'for the first year' : subscriptionPeriod}`
    return subscriptionPrice
  }

  if (data) {
    return (
      <>
        <Styled.CartItem>
          <>
            <div>
              <Heading size={2} font='ChronicleCondensed' text={data.product.name} />
              <Paragraph size={2} font='Cera'>
                £{data.product.regularPrice ? getProductPrice(data) : '0.00 - A free gift from us to you.'}
              </Paragraph>
              {data.product.regularPrice && <Paragraph text={`Renews ${data.product.subscriptionPeriod} at £${data.product.subscriptionPrice} until cancelled.`} size={1} font='Cera' />}
            </div>
            {removeable && <EditButton onClick={clearCart} text='Remove' />}
          </>
        </Styled.CartItem>
        {(data.product.subscriptionPeriod && shippingRate) &&
          <Styled.CartItem>
            <>
              <div>
                <Heading size={2} font='ChronicleCondensed' text={shippingRate.title} />
                <Paragraph size={2} font='Cera'>
                  £{shippingRate.cost.toFixed(2)}
                </Paragraph>
                {shippingRate.cost > 0 && <Paragraph text={`Charged ${data.product.subscriptionPeriod} until cancelled.`} size={1} font='Cera' />}
              </div>
              {removeable && <EditButton onClick={clearCart} text='Remove' />}
            </>
          </Styled.CartItem>
        }
      </>
    )
  }

  return (
    <Styled.CartItem>
      <FontAwesomeIcon icon={faSpinner as IconProp} spin />
    </Styled.CartItem>
  )
}

export default CartItem
