import React, { ReactElement, FC } from 'react'

import Thumbnail from '@components/Thumbnail'

import * as Styled from './styles/BrandGrid.style'

import { BrandGridProps } from './BrandGrid.types'

const BrandGrid: FC<BrandGridProps> = ({
  brands,
}: BrandGridProps): ReactElement => {
  return (
    <Styled.BrandGrid>
      {brands.map((brand, index) => {
        return (
          <Styled.BrandItem key={index}>
            <Thumbnail type='square' featuredImage={brand.image.sourceUrl} href={brand.link} showTitle title={brand.name} />
          </Styled.BrandItem>
        )
      })}
    </Styled.BrandGrid>
  )
}

export default BrandGrid
