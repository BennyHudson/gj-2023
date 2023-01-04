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
        const prefix = 'Article_Articleacf_ContentBuilder'
        switch (block.fieldGroupName) {
        case `${prefix}_Paragraph` :
          return (
            <TextBlock content={block.paragraph} />
          )

        case `${prefix}_Heading` :
          return (
            <HeadingBlock text={block.heading} />
          )

        case `${prefix}_VideoEmbed` :
          return (
            <VideoBlock videoUrl={block.videoEmbed} />
          )

        case `${prefix}_Image` :
          return (
            <ImageBlock {...block} />
          )

        case `${prefix}_ImageGallery` :
          return (
            <GalleryBlock gallery={block.gallery} />
          )

        case `${prefix}_ButtonInfoBlock` :
          return (
            <ButtonBlock {...block} />
          )

        case `${prefix}_Blockquote` :
          return (
            <QuoteBlock text={block.text} />
          )

        case `${prefix}_SingleAffiliate` :
          return (
            <ButtonBlock {...block} callToAction='Buy Now' />
          )

        case 'image_slider' :
          return (
            <ImageSlider slides={block.slider} />
          )

        case `${prefix}_CompetitionForm` :
          return (
            <Form />
          )
        }        
      })}
    </>
  )
}

export default ContentBuilder
