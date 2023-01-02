import React, { ReactElement, FC } from 'react'

import useFeaturedImage from '@hooks/useFeaturedImage'
import RawHtmlWrapper from '@components/RawHtmlWrapper'

import * as Styled from './styles/ImageBlock.style'

import { ImageBlockProps } from './ImageBlock.types'

const ImageBlock: FC<ImageBlockProps> = ({ image, imageSize }): ReactElement => {
  const { featuredImage, loaded, caption } = useFeaturedImage(image)

  return (
    <Styled.ImageBlock loaded={loaded} imageSize={imageSize}>
      <Styled.Image src={featuredImage} alt={caption} placeholder='blurred' />
      {caption && 
        <Styled.Caption imageSize={imageSize}>
          <RawHtmlWrapper content={caption} />
        </Styled.Caption>
      }
    </Styled.ImageBlock>
  )
}

export default ImageBlock
