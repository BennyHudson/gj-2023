import { gql } from '@apollo/client'

import type { ArticleNote } from '@queries/fragments/articleNote'
import { articleNote } from '@queries/fragments/articleNote'
import type { ContentBuilder } from '@queries/fragments/contentBuilder'
import { contentBuilder } from '@queries/fragments/contentBuilder'
import type { Byline } from '@queries/fragments/postBylineContent'
import { bylineContent } from '@queries/fragments/postBylineContent'
import type { Post } from '@queries/fragments/postContent'
import { postContent } from '@queries/fragments/postContent'
import type { Seo } from '@queries/fragments/seo'
import { seo } from '@queries/fragments/seo'

interface PostProps extends Omit<Post, 'articleAcf'> {
  articleAcf: {
    standfirst?: string
    featuredMedia?: string
    featuredVideo?: string
    contentBuilder?: ContentBuilder[]
  }
  seo: Seo
  content?: string
}

export interface PostBody {
  post: PostProps & Byline
  gjOptions: {
    articleNote: ArticleNote
  }
}

export const postBody = (slug: string, preview: boolean) => {
  return {
    query: gql`
      ${postContent}
      ${bylineContent}
      query postQuery {
        post(id: "${slug}", idType: ${preview ? 'DATABASE_ID' : 'SLUG'}, asPreview: ${preview}) {
          ... PostContent
          ... BylineContent
          content
          articleAcf {
            standfirst
            featuredMedia
            featuredVideo
            ${contentBuilder('Post')}
          }
          ${seo()}
        }
        ${articleNote()}
      }
    `,
  }
}
