import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React from 'react'
import { useTheme } from 'styled-components'

import RawHtmlWrapper from '@components/RawHtmlWrapper'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { GalleryBlockProps } from './GalleryBlock.types'
import * as Styled from './styles/GalleryBlock.style'

const GalleryBlock: FC<GalleryBlockProps> = ({ gallery }: GalleryBlockProps): ReactElement => {
  const { containerWidth } = useTheme() as Theme
  return (
    <Styled.GalleryBlock imageCount={gallery.length}>
      {gallery.map((image, index) => {
        return (
          <div key={index}>
            <Image src={featuredImageUrl(image.large)} width={containerWidth} height={containerWidth} alt={image.caption || ''} />
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
