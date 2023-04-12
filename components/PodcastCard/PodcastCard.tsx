import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import Link from '@components/Link'
import Meta from '@components/Meta'
import Paragraph from '@components/Paragraph'
import Thumbnail from '@components/Thumbnail'

import type { PodcastCardProps } from './PodcastCard.types'
import * as Styled from './styles/PodcastCard.style'

const PodcastCard: FC<PodcastCardProps> = ({ podcast }: PodcastCardProps): ReactElement => {
  let podcastMeta = podcast.podcasts.podcastMeta.guest.name
  if (podcast.podcasts.podcastMeta.guest.about) {
    podcastMeta = `${podcast.podcasts.podcastMeta.guest.name}, ${podcast.podcasts.podcastMeta.guest.about}`
  }
  return (
    <Styled.PodcastCard>
      <Thumbnail type='circle' to={podcast.uri} featuredImage={podcast.featuredImage.node.squareThumb} requestThumbnail size={3} />
      <Meta date={podcast.date} />
      <Heading text={podcast.title} size={2} noMargin />
      <Paragraph size={1} text={podcastMeta} appearance='secondary' font='Cera' noMargin />
      <Link to={podcast.uri} showIcon font='Cera' size={1}>
        Listen Now
      </Link>
    </Styled.PodcastCard>
  )
}

export default PodcastCard
