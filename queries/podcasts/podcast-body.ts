import { gql } from '@apollo/client'

import { Podcast } from '@queries/fragments/podcastContent'
import { podcastContent } from '@queries/fragments/podcastContent'
import { Seo, seo } from '@queries/fragments/seo'

export interface PodcastBody extends Podcast {
  seo: Seo
  content: string
}

export const podcastBodyQuery = (slug: string, preview: boolean) => {
  return {
    query: gql`
      ${podcastContent}
      query podcastQuery {
        podcast(id: "${slug}", idType: ${preview ? 'DATABASE_ID' : 'SLUG'}, asPreview: ${preview}) {
          ... PodcastContent
          content
          ${seo()}
        }
      }
    `,
  }
}
