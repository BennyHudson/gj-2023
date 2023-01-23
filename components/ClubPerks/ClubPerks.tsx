import React, { ReactElement, FC, useRef } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import * as Styled from './styles/ClubPerks.style'

import { ClubPerksProps } from './ClubPerks.types'
import Section from '@components/Section'
import Heading from '@components/Heading'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Link from '@components/Link'
import Title from '@components/Title'
import useNextLink from '@hooks/useNextLink'

const ClubPerks: FC<ClubPerksProps> = ({ perks }: ClubPerksProps): ReactElement => {
  const perksList = useRef<HTMLDivElement>(null)
  useNextLink(perksList)
  return (
    <Section>
      <Styled.ClubPerks ref={perksList}>
        <Title title='Join the club.' subtitle='Scroll to see the perks' />
        {perks.map((perk, index) => {
          return (
            <Styled.Perk key={index}>
              <Styled.ImageWrapper>
                <Image src={featuredImageUrl(perk.backgroundImage.sourceUrl)} fill alt={perk.title} quality={100} />
              </Styled.ImageWrapper>
              <Styled.PerkContent>
                <Heading inverse text={perk.title} size={3} font='ChronicleCondensed' noMargin />
                <RawHtmlWrapper inverse content={perk.content} font='Cera' />
                {perk.hasLink && (
                  <Link href={perk.link!.url} font='Cera' showIcon inverse size={2}>
                    {perk.link!.title}
                  </Link>
                )}
              </Styled.PerkContent>
            </Styled.Perk>
          )
        })}
      </Styled.ClubPerks>
    </Section>
  )
}

export default ClubPerks
