import React, { ReactElement, FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import Meta from '@components/typography/Meta'
import Heading from '@components/typography/Heading'
import Overlay from '@components/layout/Overlay'

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
  href,
  contain = false,
}: ThumbnailProps): ReactElement => {  
  const renderAs = (): string | typeof Link => {
    if (to) return Link
    if (href) return 'a'
    return 'div'
  }

  return (
    <Styled.Thumbnail 
      type={type} 
      href={href ? href : to} 
      as={renderAs()} 
      size={size}
      contain={contain}
      scroll={false}
    >
      {showTitle && 
        <>
          <Styled.ThumbnailContent>
            <Meta categories={categories} date={date} inverse />
            <Heading text={title} inverse font='ChronicleCondensed' size={3} />
          </Styled.ThumbnailContent>
          <Overlay />
        </>
      }
      {featuredImage && 
        <Image 
          src={featuredImageUrl(featuredImage)!} 
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
