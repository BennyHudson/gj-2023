import React, { ReactElement, FC, useState } from 'react'
import { useQuery } from '@apollo/client'

import { latestPodcastsQuery } from '@queries/global/latest-podcasts'

import Section from '@components/Section'
import Title from '@components/Title'
import Thumbnail from '@components/Thumbnail'
import LoadMore from '@components/LoadMore'
import Meta from '@components/Meta'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Link from '@components/Link'

import * as Styled from './styles/PodcastList.style'
import { useBreakpoints } from '@hooks/useBreakpoints'

const PodcastList: FC = (): ReactElement => {
  const [last, setLast] = useState()
  const [allPodcasts, setAllPodcasts] = useState()
  const [morePodcasts, setMorePodcasts] = useState(true)

  const { mdAndAbove } = useBreakpoints()

  const { fetchMore } = useQuery(latestPodcastsQuery.query, {
    onCompleted: (data) => {
      setLast(data.podcasts.pageInfo.endCursor)
      setAllPodcasts(data.podcasts.edges)
      setMorePodcasts(data.podcasts.pageInfo.hasNextPage)
    },
  })

  const getMore = async () => {
    const more = await fetchMore({ variables: { after: last } })
    if (more.data) {
      setLast(more.data.podcasts.pageInfo.endCursor)
      setAllPodcasts([...allPodcasts, ...more.data.podcasts.edges])
      setMorePodcasts(more.data.podcasts.pageInfo.hasNextPage)
    }
  }

  return (
    <Section appearance='secondary' containerWidth='narrow'>
      <Title inverse title='All Podcasts' />
      {allPodcasts && (
        <Styled.PodcastList>
          {allPodcasts.map((podcast, index) => {
            let podcastMeta = podcast.node.podcasts.podcastMeta.guest.name
            if (podcast.node.podcasts.podcastMeta.guest.about) {
              podcastMeta = `${podcast.node.podcasts.podcastMeta.guest.name}, ${podcast.node.podcasts.podcastMeta.guest.about}`
            }
            return (
              <Styled.Podcast key={index}>
                {mdAndAbove && (
                  <Thumbnail size={2} type='circle' to={podcast.node.uri} featuredImage={podcast.node.featuredImage.node.squareThumb} />
                )}
                <div>
                  <Meta date={podcast.node.date} inverse />
                  <Heading text={podcast.node.title} size={2} inverse />
                  <Styled.PodcastMeta>
                    <Paragraph size={1} text={podcastMeta} appearance='secondary' inverse font='Cera' noMargin />
                    <Link to={podcast.node.uri} showIcon font='Cera' size={1} inverse>
                      Listen Now
                    </Link>
                  </Styled.PodcastMeta>
                </div>
              </Styled.Podcast>
            )
          })}
        </Styled.PodcastList>
      )}
      {morePodcasts && <LoadMore onClick={getMore} />}
    </Section>
  )
}

export default PodcastList
