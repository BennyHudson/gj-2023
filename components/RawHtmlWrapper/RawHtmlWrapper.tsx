import React, { FC, ReactElement, useRef } from 'react'

import { RawHtmlWrapperProps } from './RawHtmlWrapper.types'

import * as Styled from './styles/RawHtmlWrapper.style'
import useNextLink from '@hooks/useNextLink'

const RawHtmlWrapper: FC<RawHtmlWrapperProps> = ({
  content,
  inverse = false,
  font = 'Chronicle',
}: RawHtmlWrapperProps): ReactElement => {
  const wrapper = useRef<HTMLDivElement>(null)
  useNextLink(wrapper)

  return (
    <Styled.RawHtmlWrapper 
      ref={wrapper} 
      dangerouslySetInnerHTML={{ __html: content }} 
      inverse={inverse} 
      font={font}
    />
  )
}

export default RawHtmlWrapper
