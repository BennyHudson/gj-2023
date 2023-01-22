import React, { ReactElement, FC } from 'react'
import Masonry from 'react-masonry-css'

import HouseNoteExcerpt from '@components/HouseNoteExcerpt'

import * as Styled from './styles/HouseNoteGrid.style'

import { HouseNoteGridProps } from './HouseNoteGrid.types'

const HouseNoteGrid: FC<HouseNoteGridProps> = ({
  posts,
}: HouseNoteGridProps): ReactElement => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }
  return (
    <Styled.HouseNoteGrid>
      <Masonry 
        breakpointCols={breakpointColumnsObj} 
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts.map((post, index) => {
          return (
            <HouseNoteExcerpt key={index} {...post.node} feature={false} />
          )
        })}
      </Masonry>
    </Styled.HouseNoteGrid>
  )
}

export default HouseNoteGrid
