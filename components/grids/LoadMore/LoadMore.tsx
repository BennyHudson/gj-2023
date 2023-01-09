import React, { ReactElement, FC } from 'react'

import Button from '@components/interactions/Button'

import * as Styled from './styles/LoadMore.style'

import { LoadMoreProps } from './LoadMore.types'

const LoadMore: FC<LoadMoreProps> = ({
  onClick,
}: LoadMoreProps): ReactElement => {
  return (
    <Styled.LoadMore>
      <Button onClick={onClick} text='Load More' />
    </Styled.LoadMore>
  )
}

export default LoadMore
