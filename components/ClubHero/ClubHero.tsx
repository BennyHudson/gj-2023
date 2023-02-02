import React, { ReactElement, FC, useContext } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import PageContext, { PageContextProps } from '@context/PageContext'

import Section from '@components/Section'
import Heading from '@components/Heading'

import * as Styled from './styles/ClubHero.style'

import { ClubHeroProps } from './ClubHero.types'
import Overlay from '@components/Overlay'

const ClubHero: FC<ClubHeroProps> = ({ title, featuredImage, subtitle }: ClubHeroProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps

  return (
    <Styled.ClubHero headerHeight={headerHeight}>
      <Section>
        <Styled.HeroContent>
          <Heading size={5} font='ChronicleCondensed' text={title} level={1} inverse />
          <Heading size={1} font='Cera' text={subtitle} inverse />
        </Styled.HeroContent>
      </Section>
      <Overlay />
      <Styled.BackgroundImage>
        <Image src={featuredImageUrl(featuredImage)} fill alt='' priority quality={100} />
      </Styled.BackgroundImage>
    </Styled.ClubHero>
  )
}

export default ClubHero
