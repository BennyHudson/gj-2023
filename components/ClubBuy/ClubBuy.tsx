import { useRouter } from 'next/router'
import type { FC, ReactElement } from 'react'
import React, { useContext } from 'react'

import Button from '@components/Button'
import Heading from '@components/Heading'
import Link from '@components/Link'
import Paragraph from '@components/Paragraph'
import Section from '@components/Section'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { Product } from '@typings/Product.types'

import type { ClubBuyProps } from './ClubBuy.types'
import * as Styled from './styles/ClubBuy.style'

const ClubBuy: FC<ClubBuyProps> = ({ products, freeGift, offerCode }: ClubBuyProps): ReactElement => {
  const router = useRouter()

  const { setCart } = useContext(PageContext) as PageContextProps

  const addToCart = (selectedProduct: Product) => {
    if (freeGift) {
      setCart([selectedProduct.databaseId, freeGift.databaseId])
      localStorage.setItem('cart', `${selectedProduct.databaseId},${freeGift.databaseId}`)
    } else {
      setCart([selectedProduct.databaseId])
      localStorage.setItem('cart', `${selectedProduct.databaseId}`)
    }
    router.push('/cart')
  }

  return (
    <Styled.ClubBuy>
      <Section appearance='secondary' containerWidth='narrow' textAlign='center'>
        <Heading size={5} text='Select Your Plan' font='ChronicleCondensed' inverse />
        {offerCode && <Paragraph inverse size={2} font='Cera' text={offerCode} />}
        <Paragraph inverse size={2} font='Cera'>
          For more information please email{' '}
          <Link href='mailto:subscriptions@thegentlemansjournal.com' inverse size={2} font='Cera'>
            subscriptions@thegentlemansjournal.com
          </Link>
        </Paragraph>
        <Styled.Products>
          {products.map((product, index) => {
            const subscriptionLength = product.subscriptionPeriod.match(/\d/g)
            const onSale = parseFloat(product.salePrice) > parseFloat(product.signUpFee)
            return (
              <Styled.Product key={index}>
                <div>
                  <Heading inverse text='The Clubhouse' font='Cera' size={2} weight={3} noMargin />
                  <Heading
                    inverse
                    text={subscriptionLength ? `${parseFloat(subscriptionLength[0]) * 12} Month Plan` : '12 Month Plan'}
                    font='Cera'
                    size={1}
                    weight={3}
                  />
                  <Heading inverse font='Cera' size={3} weight={3}>
                    {product.signUpFee ? (
                      <>
                        {product.salePrice && <del>£{onSale ? (parseFloat(product.subscriptionPrice.trim()) / 12).toFixed(2) : (parseFloat(product.regularPrice) / 12).toFixed(2)}</del>} £
                        {(parseFloat(parseFloat(product.signUpFee) / 12).toFixed(2)) - 0.01}/month
                      </>
                    ) : (
                      `£${(parseFloat(product.subscriptionPrice) / (parseFloat(subscriptionLength[0]) * 12)).toFixed(2)}/month`
                    )}
                  </Heading>
                  <Paragraph inverse font='Cera'>
                    {product.signUpFee ? (
                      <>
                        Pay {product.salePrice && <del>£{onSale ? product.subscriptionPrice.trim() : product.regularPrice}</del>} £
                        {product.signUpFee} {onSale ? 'for the first year' : 'today.'}
                      </>
                    ) : (
                      `Pay £${product.subscriptionPrice} today and renew at the same price every ${product.subscriptionPeriod}`
                    )}
                  </Paragraph>
                </div>
                <Button onClick={() => addToCart(product)} text='Select' />
                <Paragraph
                  inverse
                  size={1}
                  text={`Renews ${product.subscriptionPeriod} at £${product.subscriptionPrice} until cancelled.`}
                  font='Cera'
                />
              </Styled.Product>
            )
          })}
        </Styled.Products>
      </Section>
    </Styled.ClubBuy>
  )
}

export default ClubBuy
