import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Section from '@components/Section'
import Title from '@components/Title'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { ClubGiftProps } from './ClubGift.types'
import * as Styled from './styles/ClubGift.style'

const ClubGift: FC<ClubGiftProps> = ({ freeGift }: ClubGiftProps): ReactElement => {
  return (
    <Section appearance='tertiary'>
      <Title title='Complimentary Gift' subtitle='While stocks last, included in every new clubhouse membership you will receive a:' />
      <Styled.ClubGift>
        <Styled.GiftImage>
          <Image src={featuredImageUrl(freeGift.featuredImage.node.medium)} alt={freeGift.name} fill />
        </Styled.GiftImage>
        <Styled.GiftDetails>
          <Heading text={freeGift.name} noMargin size={3} font='ChronicleCondensed' />
          <RawHtmlWrapper content={freeGift.description} font='Cera' />
          <Heading text={`Remaining stock: ${freeGift.stockQuantity}`} font='Cera' weight={2} size={1} />
        </Styled.GiftDetails>
      </Styled.ClubGift>
    </Section>
  )
}

export default ClubGift
