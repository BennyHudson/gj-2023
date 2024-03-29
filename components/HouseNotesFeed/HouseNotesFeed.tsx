import { useQuery } from '@apollo/client'
import type { FC, ReactElement } from 'react'
import React, { useState } from 'react'

import HouseNoteGrid from '@components/HouseNoteGrid'
import LoadMore from '@components/LoadMore'

import { latestHouseNotesQuery } from '@queries/global/latest-houseNotes'

import type { HouseNotesFeedState } from './HouseNotesFeed.types'
import * as Styled from './styles/HouseNotesFeed.style'

const HouseNotesFeed: FC = (): ReactElement => {
  const [last, setLast] = useState<HouseNotesFeedState['last']>()
  const [allHouseNotes, setAllHouseNotes] = useState<HouseNotesFeedState['allHouseNotes']>()
  const [moreHouseNotes, setMoreHouseNotes] = useState<HouseNotesFeedState['moreHouseNotes']>(true)

  const { fetchMore } = useQuery(latestHouseNotesQuery.query, {
    onCompleted: (data) => {
      setLast(data.houseNotes.pageInfo.endCursor)
      setAllHouseNotes(data.houseNotes.edges)
      setMoreHouseNotes(data.houseNotes.pageInfo.hasNextPage)
    },
  })

  const getMore = async () => {
    const more = await fetchMore({ variables: { after: last } })
    if (more.data) {
      setLast(more.data.houseNotes.pageInfo.endCursor)
      setAllHouseNotes([...allHouseNotes!, ...more.data.houseNotes.edges])
      setMoreHouseNotes(more.data.houseNotes.pageInfo.hasNextPage)
    }
  }

  return (
    <Styled.HouseNotesFeed>
      {allHouseNotes && <HouseNoteGrid posts={allHouseNotes} />}
      {moreHouseNotes && <LoadMore onClick={getMore} />}
    </Styled.HouseNotesFeed>
  )
}

export default HouseNotesFeed
