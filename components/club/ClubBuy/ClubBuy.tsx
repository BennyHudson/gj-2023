import React, { ReactElement, FC } from 'react'

import Section from '@components/layout/Section'
import Heading from '@components/typography/Heading'
import Paragraph from '@components/typography/Paragraph'

import * as Styled from './styles/ClubBuy.style'
import { gql, useQuery } from '@apollo/client'
import Button from '@components/interactions/Button'
import Link from '@components/interactions/Link'

const ClubBuy: FC = ({ products }): ReactElement => {
  return (
    <Styled.ClubBuy>
      <Section appearance='secondary' containerWidth='narrow'>
        <Heading size={5} text='Select Your Plan' font='ChronicleCondensed' inverse />
        <Paragraph inverse size={2} font='Cera'>35% off using the code GJNEWYEAR at checkout. You pay £39.</Paragraph>
        <Paragraph inverse size={2} font='Cera'>For more information please email <Link href="mailto:subscriptions@thegentlemansjournal.com" inverse size={2} font='Cera'>subscriptions@thegentlemansjournal.com</Link></Paragraph>
        <Styled.Products>
          {products.map((product, index) => {
            return (
              <Styled.Product key={index}>
                <div>
                  <Heading inverse text={product.name} font='Cera' size={2} weight={3} />
                  <Paragraph inverse font='Cera'>
                    {product.onSale ?
                      <><del>£{product.regularPrice}</del> £{product.price}</>
                      :
                      `£${product.price}`
                    }
                  </Paragraph>
                </div>
                <Button onClick={() => console.log('hello')} text='Select' />
              </Styled.Product>
            )
          })}
        </Styled.Products>  
      </Section>
    </Styled.ClubBuy>
  )
}

export default ClubBuy
