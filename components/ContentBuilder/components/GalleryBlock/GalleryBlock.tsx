import React, { ReactElement, FC } from 'react'

import RawHtmlWrapper from '@components/RawHtmlWrapper'

import * as Styled from './styles/GalleryBlock.style'

import { GalleryBlockProps } from './GalleryBlock.types'
import useFeaturedImage from '@hooks/useFeaturedImage'

const GalleryBlock: FC<GalleryBlockProps> = ({
  gallery,
}: GalleryBlockProps): ReactElement => {
  return (
    <Styled.GalleryBlock imageCount={gallery.length}>
      {/* {gallery.map((image) => {
        const { featuredImage, caption, loaded } = useFeaturedImage(image)
        return (
          <div key={image}>
            <Styled.GalleryImage src={featuredImage} alt={caption} loaded={loaded} />
            {caption && 
              <Styled.Caption>
                <RawHtmlWrapper content={caption} />
              </Styled.Caption>
            }
          </div>
        )
      })} */}
    </Styled.GalleryBlock>
  )
}

export default GalleryBlock
