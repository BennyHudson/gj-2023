import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/Sidebar.style'

import { SidebarProps } from './Sidebar.types'

const Sidebar: FC<SidebarProps> = ({
  children,
  sidebarContent,
}: SidebarProps): ReactElement => {
  return (
    <Styled.Sidebar>
      <Styled.Content>
        {children}
      </Styled.Content>
      <Styled.SidebarContent>
        {sidebarContent}
      </Styled.SidebarContent>
    </Styled.Sidebar>
  )
}

export default Sidebar
