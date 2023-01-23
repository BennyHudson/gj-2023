import React, { ReactElement, FC, useContext } from 'react'
import Link from 'next/link'

import Title from '@components/Title'
import PostGrid from '@components/PostGrid'

import flatListToHierarchical from '@helpers/flatListToHierarchical'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/Navigation.style'

import { NavigationProps } from './Navigation.types'

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
                                <Styled.SubLink $inverse={inverse} href={cat.uri} key={index}>
                                  {cat.label}
                                </Styled.SubLink>
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
