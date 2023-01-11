import React, { ReactElement, FC } from 'react'
import Image from 'next/image'
import { gql, useQuery } from '@apollo/client'

import Section from '@components/layout/Section'
import Title from '@components/typography/Title'
import featuredImageUrl from '@helpers/featuredImageUrl'
import Heading from '@components/typography/Heading'
import RawHtmlWrapper from '@components/typography/RawHtmlWrapper'

import * as Styled from './styles/ClubGift.style'

const ClubGift: FC = ({ freeGift }): ReactElement => {

  return (
    <Section appearance='tertiary'>
      <Title title='Complimentary Gift' subtitle='While stocks last, included in every new clubhouse membership you will recieve a:' />
      <Styled.ClubGift>
        <Styled.GiftImage>
          <Image src={featuredImageUrl(freeGift.featuredImage.node.sourceUrl)} alt={freeGift.name} fill />
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
