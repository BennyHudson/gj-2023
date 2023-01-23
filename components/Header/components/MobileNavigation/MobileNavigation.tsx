import React, { ReactElement, FC, useContext, useState } from 'react'
import Link from 'next/link'
import AnimateHeight from 'react-animate-height'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp } from '@fortawesome/pro-light-svg-icons'

import flatListToHierarchical from '@helpers/flatListToHierarchical'

import PageContext, { PageContextProps } from '@context/PageContext'

import SecondaryNav from '../SecondaryNav'

import * as Styled from './styles/MobileNavigation.style'

import { MobileNavigationProps } from './MobileNavigation.types'

const MobileNavigation: FC<MobileNavigationProps> = ({ inverse = false, navigation }: MobileNavigationProps): ReactElement => {
  const { activeNavElement, headerHeight } = useContext(PageContext) as PageContextProps
  const heirarchalNav = flatListToHierarchical(navigation.menu.menuItems.nodes)

  const [activeNav, setActiveNav] = useState(null)
  const [activeSubNav, setActiveSubNav] = useState(null)

  return (
    <>
      <Styled.MobileNavigation headerHeight={headerHeight} $inverse={inverse}>
        <Styled.MainMenu $inverse={inverse}>
          {heirarchalNav.map((item, index) => {
            const isActive = activeNav === index
            if (item.children.length)
              return (
                <Styled.MenuItem key={index} $inverse={inverse}>
                  <Styled.MenuLink $isActive={index === activeNavElement} as='button' onClick={() => setActiveNav(isActive ? null : index)}>
                    {item.label}
                    <FontAwesomeIcon icon={isActive ? (faAngleUp as IconProp) : (faAngleDown as IconProp)} />
                  </Styled.MenuLink>
                  <AnimateHeight duration={500} height={isActive ? 'auto' : 0}>
                    <Styled.SubMenu subListCount={item.children.length}>
                      {item.children.map((child, index) => {
                        const isActive = activeSubNav === index
                        return (
                          <li key={index}>
                            <Styled.SubLink
                              $inverse={inverse}
                              $feature
                              href={child.uri}
                              as='button'
                              onClick={() => setActiveSubNav(isActive ? null : index)}
                            >
                              {child.label} <FontAwesomeIcon icon={isActive ? (faAngleUp as IconProp) : (faAngleDown as IconProp)} />
                            </Styled.SubLink>
                            <AnimateHeight duration={500} height={isActive ? 'auto' : 0}>
                              <Styled.SubMenuList>
                                {child.children.map((cat, index) => {
                                  return (
                                    <Styled.SubLink $inverse={inverse} href={cat.uri} key={index}>
                                      {cat.label}
                                    </Styled.SubLink>
                                  )
                                })}
                              </Styled.SubMenuList>
                            </AnimateHeight>
                          </li>
                        )
                      })}
                    </Styled.SubMenu>
                  </AnimateHeight>
                </Styled.MenuItem>
              )

            return (
              <Styled.MenuItem key={index} $inverse={inverse}>
                <Styled.MenuLink $isActive={index === activeNavElement} as={!item.uri ? 'span' : Link} href={item.uri}>
                  {item.label}
                </Styled.MenuLink>
              </Styled.MenuItem>
            )
          })}
        </Styled.MainMenu>
        <SecondaryNav inverse={inverse} showAll />
      </Styled.MobileNavigation>
      <Styled.HideOverflow />
    </>
  )
}

export default MobileNavigation
