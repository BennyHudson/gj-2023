import React, { ReactElement, FC } from 'react'

import Section from '@components/Section'

import * as Styled from './styles/BannerAdvert.style'

const BannerAdvert: FC = (): ReactElement => {
  return (
    <Section appearance='tertiary'>
      <Styled.BannerAdvert>Advert</Styled.BannerAdvert>
    </Section>
  )
}

export default BannerAdvert
