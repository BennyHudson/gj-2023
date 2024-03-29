/* eslint-disable react/no-unescaped-entities */
import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import Meta from '@components/Meta'
import Paragraph from '@components/Paragraph'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Section from '@components/Section'
import Thumbnail from '@components/Thumbnail'

// import Sharers from '@components/Sharers'
import type { PodcastContentProps } from './PodcastContent.types'
import * as Styled from './styles/PodcastContent.style'

const PodcastContent: FC<PodcastContentProps> = ({
  date,
  content,
  title,
  podcasts,
  // uri,
  host,
  producer,
  sponsor,
  featuredImage,
}: PodcastContentProps): ReactElement => {
  let podcastMeta = podcasts.podcastMeta.guest.name
  if (podcasts.podcastMeta.guest.about) {
    podcastMeta = `${podcasts.podcastMeta.guest.name}, ${podcasts.podcastMeta.guest.about}`
  }

  return (
    <Section containerWidth='narrow'>
      <Styled.Header>
        <Meta date={date} />
        {featuredImage && <Thumbnail featuredImage={featuredImage.node.squareThumb} type='circle' size={3} />}
        <div>
          <Heading size={5} text={title} font='ChronicleCondensed' />
          <Heading size={1} appearance='secondary' font='Cera' transform='uppercase' text={podcastMeta} />
        </div>
      </Styled.Header>
      <Styled.Player>
        <audio controls>
          <source src={podcasts.podcastMeta.media.audio} />
        </audio>
      </Styled.Player>
      <Styled.Content>
        <RawHtmlWrapper content={content} />
      </Styled.Content>
      <Styled.PodcastMeta>
        <Paragraph size={2} font='Cera' noMargin>
          This episode has been recorded at Mark's Club, {host && `read by ${host.name} and `} produced by {producer}.{' '}
          {sponsor && `Sponsored by ${sponsor}.`}
        </Paragraph>
        {/* <Sharers title={title} url={`/${uri}`} /> */}
      </Styled.PodcastMeta>
    </Section>
  )
}

export default PodcastContent
