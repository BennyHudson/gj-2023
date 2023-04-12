import { gql } from '@apollo/client'

import { Article, articleContent } from '@queries/fragments/articleContent'
import { ArticleNote, articleNote } from '@queries/fragments/articleNote'
import { Byline, bylineContent } from '@queries/fragments/bylineContent'
import { ContentBuilder, contentBuilder } from '@queries/fragments/contentBuilder'
import { Seo, seo } from '@queries/fragments/seo'

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
        article(id: "${slug}", idType: ${preview ? 'DATABASE_ID' : 'SLUG'}, asPreview: ${preview}) {
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
