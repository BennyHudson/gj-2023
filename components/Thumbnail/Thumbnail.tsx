import Image from 'next/image'
import Link from 'next/link'
import type { ElementType, FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import Meta from '@components/Meta'
import Overlay from '@components/Overlay'

import featuredImageUrl from '@helpers/featuredImageUrl'

import * as Styled from './styles/Thumbnail.style'
import type { ThumbnailProps } from './Thumbnail.types'

const Thumbnail: FC<ThumbnailProps> = ({
  type = 'rectangle',
  to,
  size = 4,
  featuredImage,
  showTitle = false,
  categories,
  title,
  date,
  priority = false,
  href,
  contain = false,
}: ThumbnailProps): ReactElement => {
  const renderAs = (): ElementType => {
    if (to) return Link
    if (href) return 'a'
    return 'div'
  }

  return (
    <Styled.Thumbnail type={type} href={href ? href : to} as={renderAs()} size={size} $contain={contain}>
      {showTitle && (
        <>
          <Styled.ThumbnailContent>
            <Meta categories={categories} date={date} inverse />
            {title && <Heading text={title} inverse font='ChronicleCondensed' size={3} />}
          </Styled.ThumbnailContent>
          <Overlay />
        </>
      )}
      {featuredImage && (
        <Image
          src={featuredImageUrl(featuredImage)!}
          width={type === 'circle' ? 400 : 900}
          height={type === 'circle' ? 400 : 600}
          alt=''
          quality={100}
          priority={priority}
        />
      )}
    </Styled.Thumbnail>
  )
}

export default Thumbnail
