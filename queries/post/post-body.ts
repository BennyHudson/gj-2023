import { gql } from '@apollo/client'

import { postContent, Post } from '@queries/fragments/postContent'
import { articleNote, ArticleNote } from '@queries/fragments/articleNote'
import { bylineContent, Byline } from '@queries/fragments/bylineContent'
import { contentBuilder, ContentBuilder } from '@queries/fragments/contentBuilder'
import { seo, Seo } from '@queries/fragments/seo'

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

export const postBody = (slug: string) => {
  return {
    query: gql`
      ${postContent}
      query postQuery {
        post(id: "${slug}", idType: SLUG) {
          ... PostContent
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
    `
  }
}