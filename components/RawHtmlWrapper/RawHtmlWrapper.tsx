import React, { FC, ReactElement } from 'react'

import { RawHtmlWrapperProps } from './RawHtmlWrapper.types'

import * as Styled from './styles/RawHtmlWrapper.style'

const RawHtmlWrapper: FC<RawHtmlWrapperProps> = ({
  content,
  inverse = false,
  font = 'Chronicle',
}: RawHtmlWrapperProps): ReactElement => {
  return <Styled.RawHtmlWrapper dangerouslySetInnerHTML={{ __html: content }} inverse={inverse} font={font} />
}

export default RawHtmlWrapper
