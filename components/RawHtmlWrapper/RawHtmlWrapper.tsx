import type { FC, ReactElement} from 'react'
import React, { useRef } from 'react'

import useImage from '@hooks/useImage/useImage'
import useNextLink from '@hooks/useNextLink'

import type { RawHtmlWrapperProps } from './RawHtmlWrapper.types'
import * as Styled from './styles/RawHtmlWrapper.style'

const RawHtmlWrapper: FC<RawHtmlWrapperProps> = ({ content, inverse = false, font = 'Chronicle' }: RawHtmlWrapperProps): ReactElement => {
  const wrapper = useRef<HTMLDivElement>(null)
  useNextLink(wrapper)
  useImage(wrapper)

  return <Styled.RawHtmlWrapper ref={wrapper} dangerouslySetInnerHTML={{ __html: content }} inverse={inverse} font={font} />
}

export default RawHtmlWrapper
