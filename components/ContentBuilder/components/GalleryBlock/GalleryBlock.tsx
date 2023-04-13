import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React from 'react'

import RawHtmlWrapper from '@components/RawHtmlWrapper'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { GalleryBlockProps } from './GalleryBlock.types'
import * as Styled from './styles/GalleryBlock.style'

const GalleryBlock: FC<GalleryBlockProps> = ({ gallery }: GalleryBlockProps): ReactElement => {
  return (
    <Styled.GalleryBlock imageCount={gallery.length}>
      {gallery.map((image, index) => {
        return (
          <div key={index}>
            <Image src={featuredImageUrl(image.large)} width={900} height={900} alt={image.caption || ''} />
            {image.caption && (
              <Styled.Caption>
                <RawHtmlWrapper content={image.caption} />
              </Styled.Caption>
            )}
          </div>
        )
      })}
    </Styled.GalleryBlock>
  )
}

export default GalleryBlock
