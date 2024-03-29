import type { FC, ReactElement } from 'react'
import React from 'react'

import Thumbnail from '@components/Thumbnail'

import type { BrandGridProps } from './BrandGrid.types'
import * as Styled from './styles/BrandGrid.style'

const BrandGrid: FC<BrandGridProps> = ({ brands }: BrandGridProps): ReactElement => {
  return (
    <Styled.BrandGrid>
      {brands.map((brand, index) => {
        return (
          <Styled.BrandItem key={index}>
            <Thumbnail type='square' featuredImage={brand.image.squareThumb} href={brand.link} showTitle title={brand.name} />
          </Styled.BrandItem>
        )
      })}
    </Styled.BrandGrid>
  )
}

export default BrandGrid
