import { gql } from '@apollo/client'

import { articleContent, Article } from '@queries/fragments/articleContent'
import { articleNote, ArticleNote } from '@queries/fragments/articleNote'
import { bylineContent, Byline } from '@queries/fragments/bylineContent'
import { contentBuilder, ContentBuilder } from '@queries/fragments/contentBuilder'
import { seo, Seo } from '@queries/fragments/seo'

interface ArticleProps extends Omit<Article, 'articleAcf'> {
  articleAcf: {
    standfirst?: string
    featuredMedia?: string
    featuredVideo?: string
    contentBuilder?: ContentBuilder[]
  }
  seo: Seo
}

export interface ArticleBody {
  article: ArticleProps & Byline
  gjOptions: {
    articleNote: ArticleNote
  }
}

export const articleBody = (slug: string, preview: boolean) => {
  return {
    query: gql`
      ${articleContent}
      ${bylineContent}
      query articleQuery {
        article(id: "${slug}", idType: SLUG, asPreview: ${preview}) {
          ... ArticleContent
          ... BylineContent
          articleAcf {
            standfirst
            featuredMedia
            featuredVideo
            ${contentBuilder('Article')}
          }
          ${seo()}
        }
        ${articleNote()}
      }
    `,
  }
}
