import { gql } from '@apollo/client'

import type { Article } from '@queries/fragments/articleContent'
import { articleContent } from '@queries/fragments/articleContent'
import type { ArticleNote } from '@queries/fragments/articleNote'
import { articleNote } from '@queries/fragments/articleNote'
import type { Byline } from '@queries/fragments/bylineContent'
import { bylineContent } from '@queries/fragments/bylineContent'
import type { ContentBuilder } from '@queries/fragments/contentBuilder'
import { contentBuilder } from '@queries/fragments/contentBuilder'
import type { Seo } from '@queries/fragments/seo'
import { seo } from '@queries/fragments/seo'

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
