import React, { ReactElement, FC } from 'react'

import Thumbnail from '@components/imagery/Thumbnail'
import Meta from '@components/typography/Meta'
import Heading from '@components/typography/Heading'

import * as Styled from './styles/GiftGrid.style'

import { GiftGridProps } from './GiftGrid.types'

const GiftGrid: FC<GiftGridProps> = ({
  gifts,
}: GiftGridProps): ReactElement => {
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
