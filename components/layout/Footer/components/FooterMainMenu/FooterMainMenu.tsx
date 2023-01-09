import React, { ReactElement, FC } from 'react'

import Link from '@components/interactions/Link'

import * as Styled from './styles/FooterMainMenu.style'

import { FooterMainMenuProps } from './FooterMainMenu.types'

const FooterMainMenu: FC<FooterMainMenuProps> = ({
  menu
}: FooterMainMenuProps): ReactElement => {
  return (
    <Styled.FooterMainMenu>
      {menu.map((menuItem, index) => {
        return (
          <li key={index}>
            <Link to={menuItem.uri} font='Cera' transform='uppercase' inverse size={1}>{menuItem.label}</Link>
            {menuItem.children && 
              <ul>
                {menuItem.children.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.uri} font='Cera' inverse size={1}>{item.label}</Link>
                    </li>
                  )
                })}
              </ul>
            }          
          </li>
        )
      })}
    </Styled.FooterMainMenu>
  )
}

export default FooterMainMenu
