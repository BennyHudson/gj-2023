import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import Meta from '@components/Meta'
import Thumbnail from '@components/Thumbnail'

import type { GiftGridProps } from './GiftGrid.types'
import * as Styled from './styles/GiftGrid.style'

const GiftGrid: FC<GiftGridProps> = ({ gifts }: GiftGridProps): ReactElement => {
  return (
    <Styled.GiftGrid>
      {gifts.map((gift, index) => {
        return (
          <Styled.GiftItem key={index} href={gift.gift.giftLink}>
            <Meta categories={{ nodes: [{ name: gift.gift.giftBrand }] }} />
            <Thumbnail type='square' featuredImage={gift.featuredImage.node.sourceUrl} contain />
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
