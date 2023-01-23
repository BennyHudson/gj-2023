import React, { ReactElement, FC } from 'react'
import Image from 'next/image'
import { useTheme } from 'styled-components'

import featuredImageUrl from '@helpers/featuredImageUrl'

import { Theme } from '@themes/gjTheme/gjTheme.types'

import Heading from '@components/Heading'
import Section from '@components/Section'
import Paragraph from '@components/Paragraph'
import Button from '@components/Button'

import * as Styled from './styles/ClubBanner.style'

import { ClubBannerProps } from './ClubBanner.types'

const ClubBanner: FC<ClubBannerProps> = ({ content, card }: ClubBannerProps): ReactElement => {
  const theme = useTheme() as Theme
  return (
    <Section appearance='secondary'>
      <Styled.ClubBanner>
        <Styled.Image>
          <Image src={featuredImageUrl(card)} width={theme.containerWidth / 2} height={400} alt='Join the Club' />
        </Styled.Image>
        <Styled.Content>
          <Paragraph size={2} inverse text='Introducing' transform='uppercase' font='Cera' noMargin appearance='secondary' />
          <Heading text='Clubhouse' inverse font='ChronicleCondensed' size={5} />
          <Paragraph text={content} inverse weight={1} noMargin appearance='secondary' font='Cera' size={2} />
          <Styled.ButtonGroup>
            <Button href='/club' text='Join the Club' size={1} />
            <Button href='/clubhouse-partners' text='Member Experiences' size={1} />
          </Styled.ButtonGroup>
        </Styled.Content>
      </Styled.ClubBanner>
    </Section>
  )
}

export default ClubBanner
