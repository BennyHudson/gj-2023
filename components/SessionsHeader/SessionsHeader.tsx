import type { FC, ReactElement} from 'react'
import React, { useContext } from 'react'

import Section from '@components/Section'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { SessionsHeaderProps } from './SessionsHeader.types'
import * as Styled from './styles/SessionsHeader.style'

const SessionsHeader: FC<SessionsHeaderProps> = ({ children }: SessionsHeaderProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
  return (
    <Styled.SessionsHeader headerHeight={headerHeight}>
      <Section appearance='secondary'>{children}</Section>
    </Styled.SessionsHeader>
  )
}

export default SessionsHeader
