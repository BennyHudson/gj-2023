import React, { ReactElement, FC } from 'react'

import Thumbnail from '@components/Thumbnail'
import Meta from '@components/Meta'
import Heading from '@components/Heading'

import * as Styled from './styles/GiftGrid.style'

import { GiftGridProps } from './GiftGrid.types'

const GiftGrid: FC<GiftGridProps> = ({ gifts }: GiftGridProps): ReactElement => {
  return (
    <Styled.GiftGrid>
      {gifts.map((gift, index) => {
        return (
          <Styled.GiftItem key={index} href={gift.gift.giftLink}>
            <Meta categories={{ nodes: [{ name: gift.gift.giftBrand }] }} />
            <Thumbnail type='square' featuredImage={gift.featuredImage.node.squareThumb} contain />
            <div>
              <Heading size={1} text={gift.title} noMargin />
              <Meta categories={{ nodes: [{ name: `£${gift.gift.giftPrice}` }] }} />
            </div>
          </Styled.GiftItem>
        )
      })}
    </Styled.GiftGrid>
  )
}

export default GiftGrid
