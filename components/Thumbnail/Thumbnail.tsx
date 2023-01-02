import React, { ReactElement, FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import useFeaturedImage from '@hooks/useFeaturedImage'

import Meta from '@components/Meta'
import Heading from '@components/Heading'

import * as Styled from './styles/Thumbnail.style'

import { ThumbnailProps } from './Thumbnail.types'

const Thumbnail: FC<ThumbnailProps> = ({ type = 'rectangle', to, size = 3, featuredImage, showTitle = false, categories, title, date }: ThumbnailProps): ReactElement => {  
  return (
    <Styled.Thumbnail 
      type={type} 
      href={to} 
      as={to ? Link : 'div'} 
      size={size}
    >
      {showTitle && 
        <Styled.ThumbnailContent>
          <Meta categories={categories} date={date} inverse />
          <Heading text={title} inverse font='ChronicleCondensed' size={3} />
        </Styled.ThumbnailContent>
      }
      <Image src={featuredImage.replace('cdn.dev', 'cdn')} width={type === 'circle' ? 300 : 900} height={type === 'circle' ? 300 : 600} alt='' quality={100} />
    </Styled.Thumbnail>
  )
}

export default Thumbnail
