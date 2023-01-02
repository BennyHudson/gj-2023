import React, { ReactElement, FC, useState } from 'react'

import Section from '@components/Section'
import Title from '@components/Title'
import Thumbnail from '@components/Thumbnail'
import LoadMore from '@components/LoadMore'
import Meta from '@components/Meta'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Link from '@components/Link'

import * as Styled from './styles/PodcastList.style'

import { PodcastListProps } from './PodcastList.types'

const PodcastList: FC<PodcastListProps> = ({
  podcasts,
}: PodcastListProps): ReactElement => {
  const postsToShow = 10
  const [visibleArticles, setVisibleArticles] = useState([...podcasts.slice(0, postsToShow)])

  const loadMore = () => {
    const currentlyVisibleArticles = visibleArticles.length
    setVisibleArticles([...visibleArticles, ...podcasts.slice(currentlyVisibleArticles, currentlyVisibleArticles + postsToShow)])
  }

  return (
    <Section appearance='secondary' containerWidth='narrow'>
      <Title inverse title='All Podcasts' />
      <Styled.PodcastList>
        {visibleArticles.map((podcast, index) => {
          let podcastMeta = podcast.node.podcasts.podcastMeta.guest.name
          if (podcast.node.podcasts.podcastMeta.guest.about) {
            podcastMeta = `${podcast.node.podcasts.podcastMeta.guest.name}, ${podcast.node.podcasts.podcastMeta.guest.about}`
          } 
          return (
            <Styled.Podcast key={index}>
              <Thumbnail size={2} type='circle' to={podcast.node.uri} featuredImageDatabaseId={podcast.node.featuredImageDatabaseId} />
              <div>
                <Meta date={podcast.node.date} inverse />
                <Heading text={podcast.node.title} size={2} inverse />
                <Styled.PodcastMeta>
                  <Paragraph size={1} text={podcastMeta} appearance='secondary' inverse font='Cera' noMargin />
                  <Link to={podcast.node.uri} showIcon font='Cera' size={1} inverse>Listen Now</Link>
                </Styled.PodcastMeta>
              </div>
            </Styled.Podcast>
          )
        })}
      </Styled.PodcastList>
      {visibleArticles.length < podcasts.length && <LoadMore onClick={loadMore} />}
    </Section>
  )
}

export default PodcastList
