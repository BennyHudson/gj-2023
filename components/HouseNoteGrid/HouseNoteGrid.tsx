import React, { ReactElement, FC } from 'react'
import Masonry from 'react-masonry-css'

import Thumbnail from '@components/Thumbnail'
import HouseNoteExcerpt from '@components/HouseNoteExcerpt'

import * as Styled from './styles/HouseNoteGrid.style'

import { HouseNoteGridProps } from './HouseNoteGrid.types'

const HouseNoteGrid: FC<HouseNoteGridProps> = ({
  posts,
}: HouseNoteGridProps): ReactElement => {
  return (
    <Styled.HouseNoteGrid>
      <Masonry 
        breakpointCols={4} 
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
