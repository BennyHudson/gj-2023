import type { FC, ReactElement } from 'react'
import React from 'react'

import type { SidebarProps } from './Sidebar.types'
import * as Styled from './styles/Sidebar.style'

const Sidebar: FC<SidebarProps> = ({ children, sidebarContent }: SidebarProps): ReactElement => {
  return (
    <Styled.Sidebar>
      <Styled.Content>{children}</Styled.Content>
      <Styled.SidebarContent>{sidebarContent}</Styled.SidebarContent>
    </Styled.Sidebar>
  )
}

export default Sidebar
