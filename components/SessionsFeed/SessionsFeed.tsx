import { gql, useQuery } from '@apollo/client'
import type { FC, ReactElement } from 'react'
import React, { useState } from 'react'

import Feed from '@components/Feed'
import Heading from '@components/Heading'
import Link from '@components/Link'
import Paragraph from '@components/Paragraph'
import Thumbnail from '@components/Thumbnail'
import Title from '@components/Title'
import TowerAdvert from '@components/TowerAdvert'

import { articleContent } from '@queries/fragments/articleContent'

import * as Styled from './styles/SessionsFeed.style'

const SessionsFeed: FC = (): ReactElement => {
  const [spotifyPlaylist, setSpotifyPlaylist] = useState('')

  const { data } = useQuery(
    gql`
      ${articleContent}
      query sundayPlaylist {
        page(id: "388179", idType: DATABASE_ID) {
          sessions {
            sessions {
              editorsPickInterview {
                ... on Article {
                  ...ArticleContent
                  spotifyId {
                    spotifyId
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      onCompleted: (data) => {
        const spotifyId = data.page.sessions.sessions.editorsPickInterview.spotifyId.spotifyId.split('/')
        setSpotifyPlaylist(spotifyId[spotifyId.length - 1])
      },
    },
  )

  const sundayPlaylist = data && data.page.sessions.sessions.editorsPickInterview

  return (
    <Styled.FeedWrapper>
      <Styled.SessionsFeed>
        <Styled.Column>
          {data && (
            <Styled.SundayPlaylist>
              <Thumbnail featuredImage={sundayPlaylist.featuredImage.node.squareThumb} to={sundayPlaylist.uri} type='circle' size={2} />
              <div>
                <Heading text={sundayPlaylist.title} inverse size={2} />
                <Paragraph text={sundayPlaylist.articleAcf.standfirst} inverse size={1} font='Cera' />
              </div>
              <iframe
                src={`https://open.spotify.com/embed/playlist/${spotifyPlaylist}`}
                frameBorder={0}
                width='100%'
                height='380'
                allow='encrypted-media'
              />
              <Link to={sundayPlaylist.uri} showIcon font='Cera' inverse size={1}>
                Read Interview
              </Link>
              <TowerAdvert parent='gpt-GJ_SESSIONS-MPU-001' />
            </Styled.SundayPlaylist>
          )}
        </Styled.Column>
        <Styled.Column>
          <Title title='Artist Interviews' />
          <Feed category={9682} columns={3} showAdvert={false} />
        </Styled.Column>
      </Styled.SessionsFeed>
    </Styled.FeedWrapper>
  )
}

export default SessionsFeed
