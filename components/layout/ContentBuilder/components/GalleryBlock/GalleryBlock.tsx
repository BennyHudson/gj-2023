import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import RawHtmlWrapper from '@components/typography/RawHtmlWrapper'

import * as Styled from './styles/GalleryBlock.style'

import { GalleryBlockProps } from './GalleryBlock.types'

const GalleryBlock: FC<GalleryBlockProps> = ({
  gallery,
}: GalleryBlockProps): ReactElement | undefined => {
  if (!gallery) return

  return (
    <Styled.GalleryBlock imageCount={gallery.length}>
      {gallery.map((image, index) => {
        return (
          <div key={index}>
            <Image src={featuredImageUrl(image.sourceUrl)} width={900} height={900} alt={image.caption || ''} />
            {image.caption && 
              <Styled.Caption>
                <RawHtmlWrapper content={image.caption} />
              </Styled.Caption>
            }
          </div>
        )
      })}
    </Styled.GalleryBlock>
  )
}

export default GalleryBlock
