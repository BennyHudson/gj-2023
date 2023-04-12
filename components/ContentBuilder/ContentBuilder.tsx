import type { FC, ReactElement} from 'react'
import React, { useContext } from 'react'

import Paywall from '@components/Paywall'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import AffiliateProductBlock from './components/AffiliateProductBlock'
import ButtonBlock from './components/ButtonBlock'
import CodeBlock from './components/CodeBlock'
import Form from './components/Form'
import GalleryBlock from './components/GalleryBlock'
import HeadingBlock from './components/HeadingBlock'
import ImageBlock from './components/ImageBlock'
import ImageSlider from './components/ImageSlider'
import QuoteBlock from './components/QuoteBlock'
import TextBlock from './components/TextBlock'
import VideoBlock from './components/VideoBlock'
import type { ContentBuilderProps } from './ContentBuilder.types'

const ContentBuilder: FC<ContentBuilderProps> = ({ content, prefix, membersOnly = false }: ContentBuilderProps): ReactElement => {
  const { subscriptions } = useContext(PageContext) as PageContextProps

  const contentBlocks = (block, index) => {
    switch (block.fieldGroupName) {
    case `${prefix}_Paragraph`:
      return <TextBlock key={index} content={block.paragraph} />

    case `${prefix}_Heading`:
      return <HeadingBlock key={index} text={block.heading} />

    case `${prefix}_VideoEmbed`:
      return <VideoBlock key={index} videoUrl={block.videoEmbed} />

    case `${prefix}_Image`:
      return <ImageBlock key={index} {...block} />

    case `${prefix}_ImageGallery`:
      return <GalleryBlock key={index} gallery={block.gallery} />

    case `${prefix}_ButtonInfoBlock`:
      return <ButtonBlock key={index} {...block} />

    case `${prefix}_Blockquote`:
      return <QuoteBlock key={index} text={block.text} />

    case `${prefix}_SingleAffiliate`:
      return <ButtonBlock key={index} {...block} callToAction='Buy Now' />

    case `${prefix}_ImageSlider`:
      return <ImageSlider key={index} slides={block.slider} />

    case `${prefix}_CodeSnippet`:
      return <CodeBlock key={index} adCode={block.adCode} />

    case `${prefix}_CompetitionForm`:
      return (
        <>
          {block.gravityForm ? <Form key={index} formId={block.gravityForm} /> : <HeadingBlock text='This competition is now closed' />}
        </>
      )

    case `${prefix}_AffiliateProducts`:
      return <AffiliateProductBlock key={index} {...block} />
    }
  }

  return (
    <>
      {(!subscriptions || subscriptions?.every((subscription) => subscription.status !== 'active')) && membersOnly ? (
        <>
          {contentBlocks(content[0], 0)}
          <Paywall />
        </>
      ) : (
        content.map((block, index) => {
          return contentBlocks(block, index)
        })
      )}
    </>
  )
}

export default ContentBuilder
