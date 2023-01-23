import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import RawHtmlWrapper from '@components/RawHtmlWrapper'

import * as Styled from './styles/ImageBlock.style'

import { ImageBlockProps } from './ImageBlock.types'

const ImageBlock: FC<ImageBlockProps> = ({ imageSize, image }): ReactElement | undefined => {
  if (!image) return

  return (
    <Styled.ImageBlock imageSize={imageSize}>
      {imageSize === 'standard--full' ? (
        <Image
          src={featuredImageUrl(image.sourceUrl)}
          width={750}
          height={750}
          alt={image.caption ? image.caption.replace(/<\/?[^>]+(>|$)/g, '').trim() : ''}
        />
      ) : (
        <Image
          src={featuredImageUrl(image.sourceUrl)}
          width={750}
          height={1000}
          alt={image.caption ? image.caption.replace(/<\/?[^>]+(>|$)/g, '').trim() : ''}
        />
      )}
      {image.caption && (
        <Styled.Caption imageSize={imageSize}>
          <RawHtmlWrapper content={image.caption} />
        </Styled.Caption>
      )}
    </Styled.ImageBlock>
  )
}

export default ImageBlock
