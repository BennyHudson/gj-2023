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
import CodeBlock from './components/CodeBlock'

import { ContentBuilderProps } from './ContentBuilder.types'

const ContentBuilder: FC<ContentBuilderProps> = ({
  content,
  prefix,
}: ContentBuilderProps): ReactElement => {
  // console.log(content)
  return (
    <>
      {content.map((block, index) => {
        switch (block.fieldGroupName) {
        case `${prefix}_Paragraph` :
          return (
            <TextBlock key={index} content={block.paragraph} />
          )

        case `${prefix}_Heading` :
          return (
            <HeadingBlock key={index} text={block.heading} />
          )

        case `${prefix}_VideoEmbed` :
          return (
            <VideoBlock key={index} videoUrl={block.videoEmbed} />
          )

        case `${prefix}_Image` :
          return (
            <ImageBlock key={index} {...block} />
          )

        case `${prefix}_ImageGallery` :
          return (
            <GalleryBlock key={index} gallery={block.gallery} />
          )

        case `${prefix}_ButtonInfoBlock` :
          return (
            <ButtonBlock key={index} {...block} />
          )

        case `${prefix}_Blockquote` :
          return (
            <QuoteBlock key={index} text={block.text} />
          )

        case `${prefix}_SingleAffiliate` :
          return (
            <ButtonBlock key={index} {...block} callToAction='Buy Now' />
          )

        case `${prefix}_ImageSlider` :
          return (
            <ImageSlider key={index} slides={block.slider} />
          )

        case `${prefix}_CodeSnippet` :
          return (
            <CodeBlock key={index} adCode={block.adCode} />
          )

        case `${prefix}_CompetitionForm` :
          return (
            <Form key={index} formId={block.gravityForm} />
          )
        }        
      })}
    </>
  )
}

export default ContentBuilder
