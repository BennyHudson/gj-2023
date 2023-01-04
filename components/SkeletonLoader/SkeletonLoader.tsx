import React, { ReactElement, FC } from 'react'

import Thumbnail from '@components/Thumbnail'
import Meta from '@components/Meta'

import * as Styled from './styles/SkeletonLoader.style'

import { SkeletonLoaderProps } from './SkeletonLoader.types'

const SkeletonLoader: FC<SkeletonLoaderProps> = ({
  type = 'post',
}: SkeletonLoaderProps): ReactElement => {
  const postArray = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <Styled.SkeletonLoader>
      {type === 'post' ?
        <Styled.PostGrid>
          {postArray.map((index) => {
            return (
              <Styled.Excerpt key={index}>
                <Thumbnail />
                <Meta date='1 week ago' />
                <Styled.Title>
                  <Styled.Text />
                  <Styled.Text />
                  <Styled.Text />
                </Styled.Title>
              </Styled.Excerpt>
            )
          })}
        </Styled.PostGrid>
        :
        <>Podcast Loader</>
      }
    </Styled.SkeletonLoader>
  )
}

export default SkeletonLoader
