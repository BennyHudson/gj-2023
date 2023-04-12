import type { FC, ReactElement } from 'react'
import React from 'react'

import Button from '@components/Button'

import type { LoadMoreProps } from './LoadMore.types'
import * as Styled from './styles/LoadMore.style'

const LoadMore: FC<LoadMoreProps> = ({ onClick }: LoadMoreProps): ReactElement => {
  return (
    <Styled.LoadMore>
      <Button onClick={onClick} text='Load More' />
    </Styled.LoadMore>
  )
}

export default LoadMore
