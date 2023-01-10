import React, { ReactElement, FC, useState } from 'react'
import { useQuery, gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'

import Title from '@components/typography/Title'
import Feed from '@components/grids/Feed'
import Heading from '@components/typography/Heading'
import Paragraph from '@components/typography/Paragraph'
import Link from '@components/interactions/Link'
import Thumbnail from '@components/imagery/Thumbnail'

import * as Styled from './styles/SessionsFeed.style'

const SessionsFeed: FC = (): ReactElement => {
  const [spotifyPlaylist, setSpotifyPlaylist] = useState('')

  const { data } = useQuery(gql`
    ${articleContent}
    query sundayPlaylist {
      page(id: "388179", idType: DATABASE_ID) {
        sessions {
          sessions {
            editorsPickInterview {
              ... on Article {
                ... ArticleContent
                spotifyId {
                  spotifyId
                }
              }
            }
          }
        }
      }
    }
  `, {
    onCompleted: (data) => {
      const spotifyId = data.page.sessions.sessions.editorsPickInterview.spotifyId.spotifyId.split('/')
      setSpotifyPlaylist(spotifyId[spotifyId.length - 1])
    }
  })

  const sundayPlaylist = data && data.page.sessions.sessions.editorsPickInterview

  return (
    <Styled.SessionsFeed>
      <Styled.Column>
        {data &&
          <Styled.SundayPlaylist>
            <Thumbnail featuredImage={sundayPlaylist.featuredImage.node.sourceUrl} to={sundayPlaylist.uri} type='circle' size={2} />
            <div>
              <Heading text={sundayPlaylist.title} inverse size={2} />
              <Paragraph text={sundayPlaylist.articleAcf.standfirst} inverse size={1} font='Cera' />
            </div>
            <iframe 
              src={`https://open.spotify.com/embed/playlist/${spotifyPlaylist}`}
              frameBorder={0}
              width="100%" 
              height="380"
              allow="encrypted-media"
            />
            <Link to={sundayPlaylist.uri} showIcon font='Cera' inverse size={1}>Read Interview</Link>
          </Styled.SundayPlaylist>
        }
      </Styled.Column>
      <Styled.Column>
        <Title title='Artist Interviews' />
        <Feed category='GJ Sessions' columns={3} />
      </Styled.Column>
    </Styled.SessionsFeed>
  )
}

export default SessionsFeed
