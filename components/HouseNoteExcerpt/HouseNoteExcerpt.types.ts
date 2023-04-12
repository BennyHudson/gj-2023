import type { HouseNote } from '@queries/fragments/houseNoteContent'

export interface HouseNoteExcerptProps extends HouseNote {
  priority?: boolean
  feature?: boolean
}
