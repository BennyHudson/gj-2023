import React, { ReactElement, FC } from 'react'

import PostExcerpt from '@components/PostExcerpt'

import * as Styled from './styles/PostGrid.style'

import { PostGridProps } from './PostGrid.types'

const PostGrid: FC<PostGridProps> = ({
  posts,
  columns = 4,
  inverse = false,
}: PostGridProps): ReactElement => {
  return (
    <Styled.PostGrid columns={columns}>
      {posts.map((post, index) => {
        return (
          <PostExcerpt
            priority={index < 8}
            key={index} 
            inverse={inverse} 
            {...post}
          />
        )
      })}
    </Styled.PostGrid>
  )
}

export default PostGrid
