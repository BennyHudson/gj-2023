import type { FC, ReactElement} from 'react'
import React, { useContext } from 'react'

import Heading from '@components/Heading'
import Section from '@components/Section'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { ClubHeroProps } from './ClubHero.types'
import * as Styled from './styles/ClubHero.style'

const ClubHero: FC<ClubHeroProps> = ({ title, subtitle }: ClubHeroProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps

  return (
    <Styled.ClubHero headerHeight={headerHeight}>
      <Section appearance='secondary'>
        <Styled.HeroContent>
          <Heading size={5} font='ChronicleCondensed' text={title} level={1} inverse />
          <Heading size={1} font='Cera' text={subtitle} inverse />
        </Styled.HeroContent>
      </Section>
      {/* <Overlay />
      <Styled.BackgroundImage>
        <Image src={featuredImageUrl(featuredImage)} fill alt='' priority quality={100} />
      </Styled.BackgroundImage> */}
    </Styled.ClubHero>
  )
}

export default ClubHero
