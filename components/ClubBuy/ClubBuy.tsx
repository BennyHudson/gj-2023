import React, { ReactElement, FC } from 'react'

import Section from '@components/Section'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'

import * as Styled from './styles/ClubBuy.style'
import { gql, useQuery } from '@apollo/client'
import Button from '@components/Button'
import Link from '@components/Link'

const ClubBuy: FC = (): ReactElement => {
  const { data } = useQuery(gql`
    query subscriptionProducts {
      products(where: {type: SUBSCRIPTION}) {
        nodes {
          ... on SubscriptionProduct {
            databaseId
            name
            regularPrice(format: RAW)
            signUpFee
            price(context: DEFAULT)
            onSale
          }
        }
      }
    }  
  `)

  return (
    <Styled.ClubBuy>
      <Section appearance='secondary' containerWidth='narrow'>
        <Heading size={5} text='Select Your Plan' font='ChronicleCondensed' inverse />
        <Paragraph inverse size={2} font='Cera'>35% off using the code GJNEWYEAR at checkout. You pay £39.</Paragraph>
        <Paragraph inverse size={2} font='Cera'>For more information please email <Link href="mailto:subscriptions@thegentlemansjournal.com" inverse size={2} font='Cera'>subscriptions@thegentlemansjournal.com</Link></Paragraph>
        {data && 
          <Styled.Products>
            {data.products.nodes.map((product, index) => {
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
        }      
      </Section>
    </Styled.ClubBuy>
  )
}

export default ClubBuy
