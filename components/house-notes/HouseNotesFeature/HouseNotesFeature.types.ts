import { HouseNote } from '@queries/fragments/houseNoteContent'

export interface HouseNotesFeatureProps {
  introText: string
  columns: {
    read?: HouseNote[]
    scroll?: HouseNote[]
    listen?: HouseNote
    quote?: HouseNote
    overheard?: HouseNote
    watch?: HouseNote
  }
}
