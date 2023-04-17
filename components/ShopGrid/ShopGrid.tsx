import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React from 'react'
import Slider from 'react-slick'
import { useTheme } from 'styled-components'

import Heading from '@components/Heading'

import featuredImageUrl from '@helpers/featuredImageUrl'

import { useBreakpoints } from '@hooks/useBreakpoints'

import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { ShopGridProps } from './ShopGrid.types'
import * as Styled from './styles/ShopGrid.style'

const ShopGrid: FC<ShopGridProps> = ({ products }: ShopGridProps): ReactElement => {
  const { mdAndBelow } = useBreakpoints()

  const { breakpoints } = useTheme() as Theme

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
      {
        breakpoint: breakpoints.lg,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }

  if (mdAndBelow) {
    return (
      <Styled.ProductCarousel>
        <Slider {...sliderSettings}>
          {products.map((product, index) => {
            return (
              <Styled.CardWrapper key={index}>
                <Styled.ShopCard href={product.link}>
                  <Image src={featuredImageUrl(product.featured.squareThumb)} width={400} height={400} alt={product.name} />
                  <Heading size={1} font='Cera' text={product.name} />
                </Styled.ShopCard>
              </Styled.CardWrapper>
            )
          })}
        </Slider>
      </Styled.ProductCarousel>
    )
  }

  return (
    <Styled.ShopGrid columns={products.length}>
      {products.map((product, index) => {
        return (
          <Styled.ShopCard key={index} href={product.link}>
            <Image src={featuredImageUrl(product.featured.squareThumb)} width={400} height={400} alt={product.name} />
            <Heading size={1} font='Cera' text={product.name} />
          </Styled.ShopCard>
        )
      })}
    </Styled.ShopGrid>
  )
}

export default ShopGrid
