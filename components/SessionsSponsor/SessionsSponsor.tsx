import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import Heading from '@components/Heading'

import * as Styled from './styles/SessionsSponsor.style'

import { SessionsSponsorProps } from './SessionsSponsor.types'
import Section from '@components/Section'
import Button from '@components/Button'

const SessionsSponsor: FC<SessionsSponsorProps> = ({
  sponsor,
}: SessionsSponsorProps): ReactElement => {
  console.log(sponsor)
  return (
    <Styled.SessionsSponsor>
      <Section>
        <Styled.LogoWrapper><Image src={featuredImageUrl(sponsor.logo)} alt='' width={112} height={40} /></Styled.LogoWrapper>
        <Heading text='Listen and Believe' font='Cera' weight={2} size={3} inverse noMargin />
        <Button href={sponsor.sponsorLink} text={sponsor.buttonText} size={1} />
      </Section>
      <Image src={featuredImageUrl(sponsor.backgroundImage)} fill alt='' />
    </Styled.SessionsSponsor>
  )
}

export default SessionsSponsor
