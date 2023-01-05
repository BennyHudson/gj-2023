import React, { ReactElement, FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import Meta from '@components/Meta'
import Heading from '@components/Heading'

import * as Styled from './styles/Thumbnail.style'

import { ThumbnailProps } from './Thumbnail.types'

const Thumbnail: FC<ThumbnailProps> = ({ 
  type = 'rectangle',
  to,
  size = 3,
  featuredImage,
  showTitle = false,
  categories,
  title,
  date,
  priority = false,
}: ThumbnailProps): ReactElement => {  
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
      {featuredImage && 
        <Image 
          src={featuredImageUrl(featuredImage)} 
          width={type === 'circle' ? 400 : 900} 
          height={type === 'circle' ? 400 : 600} 
          alt='' 
          quality={100}
          priority={priority}
        />
      }
    </Styled.Thumbnail>
  )
}

export default Thumbnail
