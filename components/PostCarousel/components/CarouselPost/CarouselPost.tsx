import he from 'he'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Paragraph from '@components/Paragraph/Paragraph'
import Thumbnail from '@components/Thumbnail'

import featuredImageUrl from '@helpers/featuredImageUrl'

import useFeaturedImage from '@hooks/useFeaturedImage/useFeaturedImage'

import type { CarouselPostProps } from './CarouselPost.types'
import * as Styled from './styles/CarouselPost.style'

const CarouselPost: FC<CarouselPostProps> = ({ featuredImageId, slug, title }): ReactElement => {
  const { featuredImage } = useFeaturedImage(featuredImageId)

  return (
    <Styled.CarouselPost href={`article/${slug}`}>
      <Thumbnail type='circle' size={1} featuredImage={featuredImageUrl(featuredImage)} />
      <Paragraph text={he.decode(title)} size={2} font='Cera' />
    </Styled.CarouselPost>
  )
}

export default CarouselPost
