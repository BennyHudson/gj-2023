import React, { ReactElement, FC, useContext } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/HeroImage.style'

import { HeroImageProps } from './HeroImage.types'

const HeroImage: FC<HeroImageProps> = ({ featuredImage, height = 2 }: HeroImageProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
  return (
    <Styled.HeroImage headerHeight={headerHeight} height={height}>
      <Image src={featuredImageUrl(featuredImage)} fill alt='' quality={100} priority />
    </Styled.HeroImage>
  )
}

export default HeroImage
