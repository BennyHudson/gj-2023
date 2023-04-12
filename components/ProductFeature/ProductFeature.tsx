import Image from 'next/image'
import type { FC, ReactElement} from 'react'
import React, { useContext } from 'react'

import Button from '@components/Button'
import Heading from '@components/Heading'
import RawHtmlWrapper from '@components/RawHtmlWrapper'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { ProductFeatureProps } from './ProductFeature.types'
import * as Styled from './styles/ProductFeature.style'

const ProductFeature: FC<ProductFeatureProps> = ({ product }: ProductFeatureProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps

  return (
    <Styled.ProductFeature headerHeight={headerHeight}>
      <Styled.ProductImage>
        <Image src={featuredImageUrl(product.image.sourceUrl)} width={600} height={900} alt={product.name} />
      </Styled.ProductImage>
      <Styled.ProductContent>
        <Styled.ContentWrapper>
          <Heading
            level={1}
            size={4}
            font='ChronicleCondensed'
            text={`${product.name} | ${product.additionalIssueContent.issueCoverStar}`}
            noMargin
          />
          {product.shortDescription && <RawHtmlWrapper content={product.shortDescription} />}
          <Button href='/club' text='Subscribe Now' />
        </Styled.ContentWrapper>
      </Styled.ProductContent>
    </Styled.ProductFeature>
  )
}

export default ProductFeature
