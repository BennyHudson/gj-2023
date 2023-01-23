import React, { ReactElement, FC, useContext } from 'react'

import Section from '@components/Section'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/SessionsHeader.style'

import { SessionsHeaderProps } from './SessionsHeader.types'

const SessionsHeader: FC<SessionsHeaderProps> = ({ children }: SessionsHeaderProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
  return (
    <Styled.SessionsHeader headerHeight={headerHeight}>
      <Section appearance='secondary'>{children}</Section>
    </Styled.SessionsHeader>
  )
}

export default SessionsHeader
