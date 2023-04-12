import { gql } from '@apollo/client'

import { articleNote } from '@queries/fragments/articleNote'
import { ContentBuilder, contentBuilder } from '@queries/fragments/contentBuilder'
import { HouseNote, houseNoteContent } from '@queries/fragments/houseNoteContent'
import { Seo, seo } from '@queries/fragments/seo'

export interface HouseNoteBody extends HouseNote {
  seo: Seo
  articleAcf: {
    contentBuilder: ContentBuilder[]
  }
}

export const houseNoteBodyQuery = (slug: string, preview: boolean) => {
  return {
    query: gql`
      ${houseNoteContent}
      query houseNoteQuery {
        ${articleNote()}
        houseNote(id: "${slug}", idType: ${preview ? 'DATABASE_ID' : 'SLUG'}, asPreview: ${preview}) {
          ... HouseNoteContent
          ${seo()}
          articleAcf {
            ${contentBuilder('HouseNote')}
          }
        }
      }
    `,
  }
}
