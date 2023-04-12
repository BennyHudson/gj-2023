import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React from 'react'
import { useTheme } from 'styled-components'

import Section from '@components/Section'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { ClubAdvertsProps } from './ClubAdverts.types'
import * as Styled from './styles/ClubAdverts.style'

const ClubAdverts: FC<ClubAdvertsProps> = ({ adverts }: ClubAdvertsProps): ReactElement => {
  const theme = useTheme() as Theme
  return (
    <Styled.ClubAdverts>
      <Section>
        {adverts.map((adImage, index) => {
          return (
            <div key={index}>
              <Image
                src={featuredImageUrl(adImage.adImage.sourceUrl)}
                alt=''
                width={theme.containerWidth / 2}
                height={theme.containerWidth / 2}
              />
            </div>
          )
        })}
      </Section>
    </Styled.ClubAdverts>
  )
}

export default ClubAdverts
