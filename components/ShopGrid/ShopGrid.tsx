import React, { ReactElement, FC } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Slider from 'react-slick'

import featuredImageUrl from '@helpers/featuredImageUrl'

import * as Styled from './styles/ShopGrid.style'

import { ShopGridProps } from './ShopGrid.types'
import Heading from '@components/Heading'
import { useBreakpoints } from '@hooks/useBreakpoints'

const ShopGrid: FC<ShopGridProps> = ({ products }: ShopGridProps): ReactElement => {
  const { sm } = useBreakpoints()

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  if (sm) {
    return (
      <>
        <Head>
          <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
        </Head>
        <Styled.ProductCarousel>
          <Slider {...sliderSettings}>
            {products.map((product, index) => {
              return (
                <Styled.CardWrapper key={index}>
                  <Styled.ShopCard href={product.link}>
                    <Image src={featuredImageUrl(product.featured.sourceUrl)} width={400} height={400} alt={product.name} />
                    <Heading size={1} font='Cera' text={product.name} />
                  </Styled.ShopCard>
                </Styled.CardWrapper>
              )
            })}
          </Slider>
        </Styled.ProductCarousel>
      </>
    )
  }

  return (
    <Styled.ShopGrid columns={products.length}>
      {products.map((product, index) => {
        return (
          <Styled.ShopCard key={index} href={product.link}>
            <Image src={featuredImageUrl(product.featured.sourceUrl)} width={400} height={400} alt={product.name} />
            <Heading size={1} font='Cera' text={product.name} />
          </Styled.ShopCard>
        )
      })}
    </Styled.ShopGrid>
  )
}

export default ShopGrid
