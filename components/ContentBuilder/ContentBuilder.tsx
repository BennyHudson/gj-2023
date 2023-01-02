import React, { ReactElement, FC } from 'react'

import ImageBlock from './components/ImageBlock'
import GalleryBlock from './components/GalleryBlock'
import TextBlock from './components/TextBlock'
import VideoBlock from './components/VideoBlock'
import ButtonBlock from './components/ButtonBlock'
import QuoteBlock from './components/QuoteBlock'
import HeadingBlock from './components/HeadingBlock'
import ImageSlider from './components/ImageSlider'
import Form from './components/Form'

import { ContentBuilderProps } from './ContentBuilder.types'

const ContentBuilder: FC<ContentBuilderProps> = ({
  content,
}: ContentBuilderProps): ReactElement => {
  console.log(content)
  return (
    <>
      {content.map((block) => {
        switch (block.acf_fc_layout) {
        case 'paragraph' :
          return (
            <TextBlock content={block.paragraph} />
          )

        case 'heading' :
          return (
            <HeadingBlock text={block.heading} />
          )

        case 'video_embed' :
          return (
            <VideoBlock videoUrl={block.video_embed} />
          )

        case 'image' :
          return (
            <ImageBlock image={block.image} imageSize={block.image_size} />
          )

        case 'image_gallery' :
          return (
            <GalleryBlock gallery={block.gallery} />
          )

        case 'button_info_block' :
          return (
            <ButtonBlock {...block} />
          )

        case 'blockquote' :
          return (
            <QuoteBlock text={block.text} />
          )

        case 'single_affiliate' :
          return (
            <ButtonBlock {...block} callToAction='Buy Now' />
          )

        case 'image_slider' :
          return (
            <ImageSlider slides={block.slider} />
          )

        case 'competition_form' :
          return (
            <Form slides={block.slider} />
          )
        }        
      })}
    </>
  )
}

export default ContentBuilder
