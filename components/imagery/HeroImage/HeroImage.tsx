import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import * as Styled from './styles/HeroImage.style'

import { HeroImageProps } from './HeroImage.types'

const HeroImage: FC<HeroImageProps> = ({ featuredImage, height = 2 }: HeroImageProps): ReactElement => {
  return (
    <Styled.HeroImage height={height}>
      {featuredImage && <Image src={featuredImageUrl(featuredImage)} fill alt='' quality={100} priority />}
    </Styled.HeroImage>
  )
}

export default HeroImage
