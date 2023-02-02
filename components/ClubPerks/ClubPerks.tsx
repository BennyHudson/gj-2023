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

const ClubPerks: FC<ClubPerksProps> = ({ perks, title, subtitle }: ClubPerksProps): ReactElement => {
  const perksList = useRef<HTMLDivElement>(null)
  useNextLink(perksList)
  return (
    <Styled.ClubPerks ref={perksList}>
      {title && <Title title={title} subtitle={subtitle} />}
      {perks.map((perk, index) => {
        return (
          <Styled.Perk key={index} reverse={perk.textAlignement === 'Right'}>
            <Image src={featuredImageUrl(perk.backgroundImage.sourceUrl)} fill alt={perk.title} quality={100} />
            <Styled.PerkContent>
              <Heading inverse={perk.textColor === 'Light'} text={perk.title} size={3} font='ChronicleCondensed' noMargin />
              <RawHtmlWrapper inverse={perk.textColor === 'Light'} content={perk.content} font='Cera' />
              {perk.hasLink && (
                <Link href={perk.link!.url} font='Cera' showIcon inverse={perk.textColor === 'Light'} size={2}>
                  {perk.link!.title}
                </Link>
              )}
            </Styled.PerkContent>
          </Styled.Perk>
        )
      })}
    </Styled.ClubPerks>
  )
}

export default ClubPerks
