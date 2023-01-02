import React, { ReactElement, FC, useContext } from 'react'

import useFeaturedImage from '@hooks/useFeaturedImage'

import PageContext, { PageContextType } from '@context/PageContext'

import * as Styled from './styles/HeroImage.style'

import { HeroImageProps } from './HeroImage.types'

const HeroImage: FC<HeroImageProps> = ({ featuredImageDatabaseId, height = 2 }: HeroImageProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextType
  const { featuredImage } = useFeaturedImage(featuredImageDatabaseId)
  return (
    <Styled.HeroImage headerHeight={headerHeight} backgroundImage={featuredImage} height={height} />
  )
}

export default HeroImage
