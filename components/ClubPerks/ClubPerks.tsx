import React, { ReactElement, FC, useRef } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import * as Styled from './styles/ClubPerks.style'

import { ClubPerksProps } from './ClubPerks.types'
import Heading from '@components/Heading'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Link from '@components/Link'
import Title from '@components/Title'
import useNextLink from '@hooks/useNextLink'
import { useBreakpoints } from '@hooks/useBreakpoints'

const ClubPerks: FC<ClubPerksProps> = ({ perks, title, subtitle }: ClubPerksProps): ReactElement => {
  const perksList = useRef<HTMLDivElement>(null)
  useNextLink(perksList)
  const { sm, mdAndAbove } = useBreakpoints()
  return (
    <Styled.ClubPerks ref={perksList}>
      {title && <Title title={title} subtitle={subtitle} />}
      {perks.map((perk, index) => {
        return (
          <Styled.Perk key={index} reverse={perk.textAlignement === 'Right'}>
            {mdAndAbove ?
              <Image src={featuredImageUrl(perk.backgroundImage.sourceUrl)} fill alt={perk.title} quality={100} />
              :
              <Image src={featuredImageUrl(perk.backgroundImageMobile.sourceUrl)} alt={perk.title} quality={100} width={480} height={360} />
            }
            <Styled.PerkContent>
              <Heading inverse={sm ? true : perk.textColor === 'Light'} text={perk.title} size={3} font='ChronicleCondensed' noMargin />
              <RawHtmlWrapper inverse={sm ? true :perk.textColor === 'Light'} content={perk.content} font='Cera' />
              {perk.hasLink && (
                <Link href={perk.link!.url} font='Cera' showIcon inverse={sm ? true : perk.textColor === 'Light'} size={2}>
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
