import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import * as Styled from './styles/ShopGrid.style'

import { ShopGridProps } from './ShopGrid.types'
import Heading from '@components/Heading'

const ShopGrid: FC<ShopGridProps> = ({
  products,
}: ShopGridProps): ReactElement => {
  console.log(products)
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
