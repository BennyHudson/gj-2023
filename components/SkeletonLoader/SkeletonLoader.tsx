import React, { ReactElement, FC } from 'react'

import Thumbnail from '@components/Thumbnail'
import Meta from '@components/Meta'

import * as Styled from './styles/SkeletonLoader.style'

import { SkeletonLoaderProps } from './SkeletonLoader.types'
import { useBreakpoints } from '@hooks/useBreakpoints'

const SkeletonLoader: FC<SkeletonLoaderProps> = ({ type = 'post', columns = 4 }: SkeletonLoaderProps): ReactElement => {
  const { mdAndAbove } = useBreakpoints()

  const postArray = mdAndAbove ? Array.from(Array(6).keys()) : Array.from(Array(columns * 2).keys())

  return (
    <Styled.SkeletonLoader>
      {type === 'post' ? (
        <Styled.PostGrid columns={columns}>
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
      ) : (
        <>Podcast Loader</>
      )}
    </Styled.SkeletonLoader>
  )
}

export default SkeletonLoader
