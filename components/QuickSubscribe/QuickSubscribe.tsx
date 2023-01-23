import React, { ReactElement, FC, useState, useContext } from 'react'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Link from '@components/Link'
import Button from '@components/Button'

import * as Styled from './styles/QuickSubscribe.style'

import { QuickSubscribeProps } from './QuickSubscribe.types'
import PageContext, { PageContextProps } from '@context/PageContext'
import { useRouter } from 'next/router'

const QuickSubscribe: FC<QuickSubscribeProps> = ({ products, freeGift }: QuickSubscribeProps): ReactElement => {
  const router = useRouter()
  const { setCart } = useContext(PageContext) as PageContextProps

  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const addToCart = () => {
    setCart([selectedProduct, freeGift])
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
          return (
            <Styled.Product key={index} onClick={() => setSelectedProduct(product)} $active={product.name === selectedProduct.name}>
              <div>
                <Heading text={product.name} font='Cera' size={2} weight={3} noMargin />
                <Paragraph font='Cera'>
                  {product.onSale ? (
                    <>
                      <del>£{product.regularPrice}</del> £{product.price}
                    </>
                  ) : (
                    `£${product.price}`
                  )}
                </Paragraph>
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
