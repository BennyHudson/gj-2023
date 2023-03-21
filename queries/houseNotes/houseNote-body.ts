import { gql } from '@apollo/client'

import { articleNote } from '@queries/fragments/articleNote'
import { contentBuilder, ContentBuilder } from '@queries/fragments/contentBuilder'
import { houseNoteContent, HouseNote } from '@queries/fragments/houseNoteContent'
import { seo, Seo } from '@queries/fragments/seo'

export interface HouseNoteBody extends HouseNote {
  seo: Seo
  articleAcf: {
    contentBuilder: ContentBuilder[]
  }
}

export const houseNoteBodyQuery = (slug: string, preview: boolean) => {
  const slugIsString = isNaN(parseInt(slug))
  return {
    query: gql`
      ${houseNoteContent}
      query houseNoteQuery {
        ${articleNote()}
        houseNote(id: "${slug}", idType: ${slugIsString ? 'SLUG' : 'DATABASE_ID'}, asPreview: ${preview}) {
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
