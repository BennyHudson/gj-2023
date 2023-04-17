import { gql } from '@apollo/client'

import { articleNote } from '@queries/fragments/articleNote'
import { contentBuilder } from '@queries/fragments/contentBuilder'
import type { HouseNote } from '@queries/fragments/houseNoteContent'
import { houseNoteContent } from '@queries/fragments/houseNoteContent'
import type { Seo } from '@queries/fragments/seo'
import { seo } from '@queries/fragments/seo'

export interface HouseNoteBody extends HouseNote {
  seo: Seo
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
