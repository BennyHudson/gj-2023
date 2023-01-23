import React, { ReactElement, FC, useContext } from 'react'
import { useRouter } from 'next/router'

import Section from '@components/Section'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Button from '@components/Button'
import Link from '@components/Link'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/ClubBuy.style'

const ClubBuy: FC = ({ products, freeGift }): ReactElement => {
  const router = useRouter()

  const { setCart } = useContext(PageContext) as PageContextProps

  const addToCart = (selectedProduct) => {
    setCart([selectedProduct, freeGift])
    router.push('/cart')
  }

  return (
    <Styled.ClubBuy>
      <Section appearance='secondary' containerWidth='narrow'>
        <Heading size={5} text='Select Your Plan' font='ChronicleCondensed' inverse />
        <Paragraph inverse size={2} font='Cera'>
          35% off using the code GJNEWYEAR at checkout. You pay £39.
        </Paragraph>
        <Paragraph inverse size={2} font='Cera'>
          For more information please email{' '}
          <Link href='mailto:subscriptions@thegentlemansjournal.com' inverse size={2} font='Cera'>
            subscriptions@thegentlemansjournal.com
          </Link>
        </Paragraph>
        <Styled.Products>
          {products.map((product, index) => {
            console.log(product)
            return (
              <Styled.Product key={index}>
                <div>
                  <Heading inverse text={product.name} font='Cera' size={2} weight={3} />
                  <Paragraph inverse font='Cera'>
                    {product.onSale ? (
                      <>
                        <del>£{product.regularPrice}</del> £{product.price}
                      </>
                    ) : (
                      `£${product.signUpFee} for the first year`
                    )}
                  </Paragraph>
                </div>
                <Button onClick={() => addToCart(product)} text='Select' />
                <Paragraph inverse size={1} text={`Renews annually at ${product.regularPrice} until cancelled.`} font='Cera' />
              </Styled.Product>
            )
          })}
        </Styled.Products>
      </Section>
    </Styled.ClubBuy>
  )
}

export default ClubBuy
