import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import Section from '@components/Section'

import type { ClubHeroProps } from './ClubHero.types'
import * as Styled from './styles/ClubHero.style'

const ClubHero: FC<ClubHeroProps> = ({ title, subtitle }: ClubHeroProps): ReactElement => {
  return (
    <Styled.ClubHero>
      <Section appearance='secondary'>
        <Styled.HeroContent>
          <Heading size={5} font='ChronicleCondensed' text={title} level={1} inverse />
          <Heading size={1} font='Cera' text={subtitle} inverse />
        </Styled.HeroContent>
      </Section>
    </Styled.ClubHero>
  )
}

export default ClubHero
