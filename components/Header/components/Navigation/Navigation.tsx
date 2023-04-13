import Link from 'next/link'
import type { FC, ReactElement } from 'react'
import React, { useContext } from 'react'

import PostGrid from '@components/PostGrid'
import Title from '@components/Title'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import flatListToHierarchical from '@helpers/flatListToHierarchical'

import type { NavigationProps } from './Navigation.types'
import * as Styled from './styles/Navigation.style'

const Navigation: FC<NavigationProps> = ({ inverse = false, navigation }: NavigationProps): ReactElement => {
  const { activeNavElement } = useContext(PageContext) as PageContextProps
  const heirarchalNav = flatListToHierarchical(navigation.menu.menuItems.nodes)

  return (
    <Styled.Navigation>
      <Styled.MainMenu $inverse={inverse}>
        {heirarchalNav.map((item, index) => {
          if (item.children.length)
            return (
              <Styled.MenuItem key={index} $inverse={inverse}>
                <Styled.MenuLink $isActive={index === activeNavElement} as={!item.uri ? 'span' : Link} href={item.uri}>
                  {item.label}
                </Styled.MenuLink>
                <Styled.SubMenuWrapper>
                  <Styled.SubMenu subListCount={item.children.length}>
                    {item.children.map((child, index) => {
                      return (
                        <li key={index}>
                          <Styled.SubLink $inverse={inverse} $feature href={child.uri}>
                            {child.label}
                          </Styled.SubLink>
                          <Styled.SubMenuList>
                            {child.children.map((cat, index) => {
                              return (
                                <li key={index}>
                                  <Styled.SubLink $inverse={inverse} href={cat.uri}>
                                    {cat.label}
                                  </Styled.SubLink>
                                </li>
                              )
                            })}
                          </Styled.SubMenuList>
                        </li>
                      )
                    })}
                  </Styled.SubMenu>
                </Styled.SubMenuWrapper>
              </Styled.MenuItem>
            )

          if (item.uri === '/podcasts/') {
            return (
              <Styled.MenuItem key={index} $inverse={inverse}>
                <Styled.MenuLink $isActive={index === activeNavElement} as={!item.uri ? 'span' : Link} href={item.uri}>
                  {item.label}
                </Styled.MenuLink>
                <Styled.SubMenuWrapper>
                  <Title
                    title='Latest'
                    links={[
                      {
                        text: 'View All',
                        url: item.uri,
                      },
                    ]}
                  />
                  <PostGrid inverse={inverse} posts={navigation.podcasts.nodes} />
                </Styled.SubMenuWrapper>
              </Styled.MenuItem>
            )
          }

          if (item.uri === '/house-notes/') {
            return (
              <Styled.MenuItem key={index} $inverse={inverse}>
                <Styled.MenuLink $isActive={index === activeNavElement} as={!item.uri ? 'span' : Link} href={item.uri}>
                  {item.label}
                </Styled.MenuLink>
                <Styled.SubMenuWrapper>
                  <Title
                    title='Latest'
                    links={[
                      {
                        text: 'View All',
                        url: item.uri,
                      },
                    ]}
                  />
                  <PostGrid inverse={inverse} posts={navigation.houseNotes.nodes} />
                </Styled.SubMenuWrapper>
              </Styled.MenuItem>
            )
          }

          if (item.uri === '/category/video/') {
            return (
              <Styled.MenuItem key={index} $inverse={inverse}>
                <Styled.MenuLink $isActive={index === activeNavElement} as={!item.uri ? 'span' : Link} href={item.uri}>
                  {item.label}
                </Styled.MenuLink>
                <Styled.SubMenuWrapper>
                  <Title
                    title='Latest'
                    links={[
                      {
                        text: 'View All',
                        url: item.uri,
                      },
                    ]}
                  />
                  <PostGrid inverse={inverse} posts={navigation.videos.nodes} />
                </Styled.SubMenuWrapper>
              </Styled.MenuItem>
            )
          }

          if (item.uri === '/gj-sessions/') {
            return (
              <Styled.MenuItem key={index} $inverse={inverse}>
                <Styled.MenuLink $isActive={index === activeNavElement} as={!item.uri ? 'span' : Link} href={item.uri}>
                  {item.label}
                </Styled.MenuLink>
                <Styled.SubMenuWrapper>
                  <Title
                    title='Latest'
                    links={[
                      {
                        text: 'View All',
                        url: item.uri,
                      },
                    ]}
                  />
                  <PostGrid inverse={inverse} posts={navigation.sessions.nodes} />
                </Styled.SubMenuWrapper>
              </Styled.MenuItem>
            )
          }

          return (
            <Styled.MenuItem key={index} $inverse={inverse}>
              <Styled.MenuLink $isActive={index === activeNavElement} as={!item.uri ? 'span' : Link} href={item.uri}>
                {item.label}
              </Styled.MenuLink>
            </Styled.MenuItem>
          )
        })}
      </Styled.MainMenu>
    </Styled.Navigation>
  )
}

export default Navigation
