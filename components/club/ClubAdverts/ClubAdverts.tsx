import React, { ReactElement, FC } from 'react'
import Image from 'next/image'
import { useTheme } from 'styled-components'

import { Theme } from '@themes/gjTheme/gjTheme.types'

import featuredImageUrl from '@helpers/featuredImageUrl'

import Section from '@components/layout/Section'

import * as Styled from './styles/ClubAdverts.style'

import { ClubAdvertsProps } from './ClubAdverts.types'

const ClubAdverts: FC<ClubAdvertsProps> = ({
  adverts,
}: ClubAdvertsProps): ReactElement => {
  const theme = useTheme() as Theme
  return (
    <Styled.ClubAdverts>
      <Section>
        {adverts.map((adImage, index) => {
          return (
            <Image 
              key={index}
              src={featuredImageUrl(adImage.adImage.sourceUrl)} 
              alt=''
              width={theme.containerWidth / 2} 
              height={theme.containerWidth / 2}
            />
          )
        })}
      </Section>
    </Styled.ClubAdverts>
  )
}

export default ClubAdverts
