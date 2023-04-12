import type { HouseNote } from '@queries/fragments/houseNoteContent'

export interface HouseNoteGridProps {
  posts: {
    node: HouseNote
  }[]
}
