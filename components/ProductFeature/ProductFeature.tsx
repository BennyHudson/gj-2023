import React, { ReactElement, FC, useContext } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/ProductFeature.style'

import { ProductFeatureProps } from './ProductFeature.types'
import Heading from '@components/Heading'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Button from '@components/Button'

const ProductFeature: FC<ProductFeatureProps> = ({
  product,
}: ProductFeatureProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps

  console.log(product)
  return (
    <Styled.ProductFeature headerHeight={headerHeight}>
      <Styled.ProductImage>
        <Image src={featuredImageUrl(product.image.sourceUrl)} width={600} height={900} alt={product.name} />
      </Styled.ProductImage>
      <Styled.ProductContent>
        <Styled.ContentWrapper>
          <Heading level={1} size={4} font='ChronicleCondensed' text={`${product.name} | ${product.additionalIssueContent.issueCoverStar}`} noMargin />
          {product.shortDescription && <RawHtmlWrapper content={product.shortDescription} />}
          <Button href='/club' text='Subscribe Now' />
        </Styled.ContentWrapper>
      </Styled.ProductContent>
    </Styled.ProductFeature>
  )
}

export default ProductFeature
