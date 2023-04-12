import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Button from '@components/Button'
import Heading from '@components/Heading'
import Section from '@components/Section'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { SessionsSponsorProps } from './SessionsSponsor.types'
import * as Styled from './styles/SessionsSponsor.style'

const SessionsSponsor: FC<SessionsSponsorProps> = ({ sponsor }: SessionsSponsorProps): ReactElement => {
  return (
    <Styled.SessionsSponsor>
      <Section>
        <Styled.LogoWrapper>
          <Image src={featuredImageUrl(sponsor.logo)} alt='' width={112} height={40} />
        </Styled.LogoWrapper>
        <Heading text='Listen and Believe' font='Cera' weight={2} size={3} inverse noMargin />
        <Button href={sponsor.sponsorLink} text={sponsor.buttonText} size={1} />
      </Section>
      <Image src={featuredImageUrl(sponsor.backgroundImage)} fill alt='' />
    </Styled.SessionsSponsor>
  )
}

export default SessionsSponsor
