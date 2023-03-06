import React, { ReactElement, FC } from 'react'
import he from 'he'

import useFeaturedImage from '@hooks/useFeaturedImage/useFeaturedImage'
import featuredImageUrl from '@helpers/featuredImageUrl'

import Thumbnail from '@components/Thumbnail'
import Paragraph from '@components/Paragraph/Paragraph'

import * as Styled from './styles/CarouselPost.style'

import { CarouselPostProps } from './CarouselPost.types'

const CarouselPost: FC<CarouselPostProps> = ({
  featuredImageId, 
  slug,
  title,
}): ReactElement => {
  const { featuredImage } = useFeaturedImage(featuredImageId)

  return (
    <Styled.CarouselPost href={`article/${slug}`}>
      <Thumbnail type='circle' size={1} featuredImage={featuredImageUrl(featuredImage)} />
      <Paragraph text={he.decode(title)} size={2} font='Cera' />
    </Styled.CarouselPost>
  )
}

export default CarouselPost
