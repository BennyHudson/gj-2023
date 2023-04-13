import { useRouter } from 'next/router'
import type { FC, ReactElement } from 'react'
import React, { useContext, useState } from 'react'

import Button from '@components/Button'
import Heading from '@components/Heading'
import Link from '@components/Link'
import Paragraph from '@components/Paragraph'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { QuickSubscribeProps } from './QuickSubscribe.types'
import * as Styled from './styles/QuickSubscribe.style'

const QuickSubscribe: FC<QuickSubscribeProps> = ({ products, freeGift }: QuickSubscribeProps): ReactElement => {
  const router = useRouter()
  const { setCart } = useContext(PageContext) as PageContextProps

  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const addToCart = () => {
    if (freeGift) {
      setCart([selectedProduct.databaseId, freeGift.databaseId])
      localStorage.setItem('cart', `${selectedProduct.databaseId},${freeGift?.databaseId}`)
    } else {
      setCart([selectedProduct.databaseId])
      localStorage.setItem('cart', `${selectedProduct.databaseId}`)
    }

    router.push('/cart')
  }

  return (
    <Styled.QuickSubscribe>
      <Heading text='Clubhouse.' font='ChronicleCondensed' size={3} />
      <Paragraph font='Cera' size={2}>
        A special kind of private club where members receive offers and experiences from hand-picked, premium brands, as well as invites to
        exclusive events and the Bookazine delivered directly to their door.
      </Paragraph>
      <Link href='/club' font='Cera' showIcon size={2}>
        Learn more
      </Link>
      <Styled.ProductList>
        <Heading text='Subscribe now:' font='ChronicleCondensed' size={3} />
        {products.map((product, index) => {
          const onSale = parseFloat(product.salePrice) > parseFloat(product.signUpFee)
          return (
            <Styled.Product key={index} onClick={() => setSelectedProduct(product)} $active={product.name === selectedProduct.name}>
              <div>
                <Heading text={product.name} font='Cera' size={2} weight={3} noMargin />
                <Paragraph font='Cera' noMargin>
                  {product.signUpFee ? (
                    <>
                      {product.salePrice && <del>£{onSale ? product.subscriptionPrice.trim() : product.regularPrice}</del>} £
                      {product.signUpFee} {onSale ? 'for the first year' : product.subscriptionPeriod}
                    </>
                  ) : (
                    `£${product.subscriptionPrice} ${product.subscriptionPeriod}`
                  )}
                </Paragraph>
                <Paragraph
                  size={1}
                  text={`Renews ${product.subscriptionPeriod} at £${product.subscriptionPrice} until cancelled.`}
                  font='Cera'
                />
              </div>
            </Styled.Product>
          )
        })}
      </Styled.ProductList>
      <Button text='Subscribe' size={1} onClick={addToCart} />
    </Styled.QuickSubscribe>
  )
}

export default QuickSubscribe
