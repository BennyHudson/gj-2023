import type { FC, ReactElement } from 'react'
import React from 'react'

import Link from '@components/Link'

import type { FooterMainMenuProps } from './FooterMainMenu.types'
import * as Styled from './styles/FooterMainMenu.style'

const FooterMainMenu: FC<FooterMainMenuProps> = ({ menu }: FooterMainMenuProps): ReactElement => {
  return (
    <Styled.FooterMainMenu>
      {menu.map((menuItem, index) => {
        return (
          <li key={index}>
            <Link to={menuItem.uri} font='Cera' transform='uppercase' inverse size={1}>
              {menuItem.label}
            </Link>
            {menuItem.children && (
              <ul>
                {menuItem.children.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.uri} font='Cera' inverse size={1}>
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
        )
      })}
    </Styled.FooterMainMenu>
  )
}

export default FooterMainMenu
