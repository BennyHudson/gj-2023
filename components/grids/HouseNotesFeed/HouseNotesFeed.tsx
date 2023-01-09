import React, { ReactElement, FC, useState } from 'react'
import { useQuery } from '@apollo/client'

import { latestHouseNotesQuery } from '@queries/global/latest-houseNotes'

import HouseNoteGrid from '@components/grids/HouseNoteGrid'
import LoadMore from '@components/grids/LoadMore'

import * as Styled from './styles/HouseNotesFeed.style'

// import { HouseNotesFeedProps } from './HouseNotesFeed.types'

const HouseNotesFeed: FC = (): ReactElement => {
  const [last, setLast] = useState()
  const [allHouseNotes, setAllHouseNotes] = useState()
  const [moreHouseNotes, setMoreHouseNotes] = useState(true)

  const { fetchMore } = useQuery(latestHouseNotesQuery.query, {
    onCompleted: (data) => {
      setLast(data.houseNotes.pageInfo.endCursor)
      setAllHouseNotes(data.houseNotes.edges)
      setMoreHouseNotes(data.houseNotes.pageInfo.hasNextPage)
    }
  })

  const getMore = async () => {
    const more = await fetchMore({ variables: { after: last, }})
    if (more.data) {
      setLast(more.data.houseNotes.pageInfo.endCursor)
      setAllHouseNotes([...allHouseNotes, ...more.data.houseNotes.edges])
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
