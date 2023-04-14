import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import type { ElementType, FC, ReactElement } from 'react'
import React, { useContext, useState } from 'react'
import AnimateHeight from 'react-animate-height'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import flatListToHierarchical from '@helpers/flatListToHierarchical'

import type { MobileNavigationProps } from './MobileNavigation.types'
import * as Styled from './styles/MobileNavigation.style'
import SecondaryNav from '../SecondaryNav'

const MobileNavigation: FC<MobileNavigationProps> = ({ inverse = false, navigation }: MobileNavigationProps): ReactElement => {
  const { activeNavElement, headerHeight } = useContext(PageContext) as PageContextProps
  const heirarchalNav = flatListToHierarchical(navigation.menu.menuItems.nodes)

  const [activeNav, setActiveNav] = useState<number | null>(null)
  const [activeSubNav, setActiveSubNav] = useState<number | null>(null)

  return (
    <>
      <Styled.MobileNavigation headerHeight={headerHeight} $inverse={inverse}>
        <Styled.MainMenu $inverse={inverse}>
          {heirarchalNav.map((item, index) => {
            const isActive = activeNav === index
            if (item.children?.length)
              return (
                <Styled.MenuItem key={index} $inverse={inverse}>
                  <Styled.MenuLink $isActive={index === activeNavElement} as='button' onClick={() => setActiveNav(isActive ? null : index)}>
                    {item.label}
                    <FontAwesomeIcon icon={isActive ? (faAngleUp as IconProp) : (faAngleDown as IconProp)} />
                  </Styled.MenuLink>
                  <AnimateHeight duration={500} height={isActive ? 'auto' : 0}>
                    <Styled.SubMenu>
                      {item.children.map((child, index) => {
                        const isActive = activeSubNav === index
                        return (
                          <li key={index}>
                            <Styled.SubLink
                              $inverse={inverse}
                              $feature
                              onClick={() => setActiveSubNav(isActive ? null : index)}
                            >
                              {child.label} <FontAwesomeIcon icon={isActive ? (faAngleUp as IconProp) : (faAngleDown as IconProp)} />
                            </Styled.SubLink>
                            <AnimateHeight duration={500} height={isActive ? 'auto' : 0}>
                              <Styled.SubMenuList>
                                {child.children?.map((cat, index) => {
                                  return (
                                    /* eslint-disable */
                                    <Styled.SubLink 
                                      $feature={false} 
                                      $inverse={inverse} 
                                      href={cat.uri} 
                                      key={index} 
                                      as={Link as ElementType}
                                    >
                                      {cat.label}
                                    </Styled.SubLink>
                                    /* eslint-enable */
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
