import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/AffiliateProductBlock.style'

import { AffiliateProductBlockProps } from './AffiliateProductBlock.types'
import Image from 'next/image'
import featuredImageUrl from '@helpers/featuredImageUrl'
import { useTheme } from 'styled-components'
import { Theme } from '@themes/gjTheme/gjTheme.types'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Button from '@components/Button'

const AffiliateProductBlock: FC<AffiliateProductBlockProps> = ({
  affiliateProducts,
}: AffiliateProductBlockProps): ReactElement => {
  const theme = useTheme() as Theme
  const productCount = affiliateProducts.length
  return (
    <Styled.AffiliateProductBlock productCount={productCount}>
      {affiliateProducts.map((product, index) => {
        return (
          <Styled.Product key={index}>
            <Image src={featuredImageUrl(product.image.sourceUrl)} alt={product.title} width={theme.containerWidth / productCount} height={theme.containerWidth / productCount} />
            <div>
              <Heading text={product.title} size={1} weight={2} font='Cera' noMargin />
              <Heading text={`£${product.price}`} size={1} font='Cera' appearance='secondary' />
            </div>
            {product.text && <Paragraph text={product.text} size={2} font='Cera' />}
            <Button href={product.affiliateLink} size={1} text={product.urlButtonText || 'Buy Now'} />
          </Styled.Product>
        )
      })}
    </Styled.AffiliateProductBlock>
  )
}

export default AffiliateProductBlock
