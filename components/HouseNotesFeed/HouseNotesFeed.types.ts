import type { HouseNote } from '@queries/fragments/houseNoteContent'

export interface HouseNotesFeedState {
  allHouseNotes: {
    node: HouseNote
  }[]
  moreHouseNotes: boolean
  last: string
}
