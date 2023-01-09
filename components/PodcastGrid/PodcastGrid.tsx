import React, { ReactElement, FC } from 'react'

import Thumbnail from '@components/Thumbnail'
import Meta from '@components/Meta'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'

import * as Styled from './styles/PodcastGrid.style'

import { PodcastGridProps } from './PodcastGrid.types'

const PodcastGrid: FC<PodcastGridProps> = ({
  podcasts,
}: PodcastGridProps): ReactElement => {
  return (
    <Styled.PodcastGrid>
      <Styled.FeaturedPodcast>
        <Thumbnail to={podcasts[0].uri} featuredImage={podcasts[0].featuredImage.node.sourceUrl} />
        <Styled.FeatureDetails href={podcasts[0].uri} scroll={false}>
          <Meta date={podcasts[0].date} />
          <Heading text={podcasts[0].title} size={3} font='ChronicleCondensed' />
          <Paragraph font='Cera' weight={1} size={2} appearance='secondary'>{podcasts[0].podcasts.podcastMeta.guest.name}, {podcasts[0].podcasts.podcastMeta.guest.about}</Paragraph>
        </Styled.FeatureDetails>
      </Styled.FeaturedPodcast>
      <Styled.PodcastList>
        {podcasts.slice(1).map((podcast, index) => {
          return (
            <Styled.Podcast key={index}>
              <Thumbnail type='circle' to={podcast.uri} featuredImage={podcast.featuredImage.node.sourceUrl} />
              <Styled.PodcastDetails href={podcast.uri} scroll={false}>
                <Meta date={podcasts[0].date} />
                <Heading size={1} text={podcast.title} />
                <Paragraph font='Cera' weight={1} size={1} appearance='secondary'>{podcast.podcasts.podcastMeta.guest.name}, {podcast.podcasts.podcastMeta.guest.about}</Paragraph>
              </Styled.PodcastDetails>
            </Styled.Podcast>
          )
        })}
      </Styled.PodcastList>
    </Styled.PodcastGrid>
  )
}

export default PodcastGrid
