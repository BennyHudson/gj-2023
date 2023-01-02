import React, { ReactElement, FC } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

import Title from '@components/Title'

import PostGrid from '@components/PostGrid'

// import flatListToHierarchical from '@helpers/flatListToHierarchical'

import * as Styled from './styles/Navigation.style'

import { NavigationProps } from './Navigation.types'

const Navigation: FC<NavigationProps> = ({ inverse = false }: NavigationProps): ReactElement => {
  // const menu = useStaticQuery(graphql`
  //   query mainMenu {
  //     menu(id: "dGVybTo5NjE3") {
  //       menuItems {
  //         nodes {
  //           key: id
  //           label
  //           uri
  //           parentId
  //         }
  //       }
  //     }
  //     allWpPodcast(limit: 4) {
  //       nodes {
  //         title
  //         featuredImageDatabaseId
  //         uri
  //         podcasts {
  //           podcastMeta {
  //             guest {
  //               name
  //               about
  //             }
  //           }
  //         }
  //       }
  //     }
  //     allWpHouseNote(limit: 4) {
  //       nodes {
  //         title
  //         featuredImageDatabaseId
  //         uri
  //       }
  //     }
  //     videos: allWpArticle(
  //       filter: {categories: {nodes: {elemMatch: {name: {eq: "Video"}}}}}
  //       limit: 4
  //       sort: {date: DESC}
  //     ) {
  //       nodes {
  //         articleAcf {
  //           standfirst
  //         }
  //         categories {
  //           nodes {
  //             name
  //           }
  //         }
  //         uri
  //         databaseId
  //         featuredImageDatabaseId
  //         title
  //         date
  //       }
  //     }
  //     sessions: allWpArticle(
  //       filter: {categories: {nodes: {elemMatch: {name: {eq: "GJ Sessions"}}}}}
  //       limit: 4
  //     ) {
  //       nodes {
  //         title
  //         uri
  //         databaseId
  //         featuredImageDatabaseId
  //         categories {
  //           nodes {
  //             name
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const heirarchalNav = flatListToHierarchical(menu.wpMenu.menuItems.nodes)

  return (
    <Styled.Navigation>
      <Styled.MainMenu inverse={inverse}>
        {
          heirarchalNav.map((item, index) => {
            if (item.children.length) return (
              <Styled.MenuItem key={index} inverse={inverse}>
                <Styled.MenuLink to={item.uri}>{item.label}</Styled.MenuLink>
                <Styled.SubMenuWrapper>
                  <Styled.SubMenu subListCount={item.children.length}>
                    {item.children.map((child, index) => {
                      return (
                        <li key={index}>
                          <Styled.SubLink inverse={inverse} feature to={child.uri}>{child.label}</Styled.SubLink>
                          <Styled.SubMenuList>
                            {child.children.map((cat, index) => {
                              return (
                                <Styled.SubLink inverse={inverse} to={cat.uri} key={index}>{cat.label}</Styled.SubLink>
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
                <Styled.MenuItem key={index} inverse={inverse}>
                  <Styled.MenuLink to={item.uri}>{item.label}</Styled.MenuLink>
                  <Styled.SubMenuWrapper>
                    <Title
                      title='Latest'
                      links={[
                        {
                          text: 'View All',
                          url: item.uri,
                        }
                      ]}
                    />
                    <PostGrid inverse={inverse} posts={menu.allWpPodcast.nodes} />
                  </Styled.SubMenuWrapper>
                </Styled.MenuItem>
              )
            }

            if (item.uri === '/house-notes/') {
              return (
                <Styled.MenuItem key={index} inverse={inverse}>
                  <Styled.MenuLink to={item.uri}>{item.label}</Styled.MenuLink>
                  <Styled.SubMenuWrapper>
                    <Title
                      title='Latest'
                      links={[
                        {
                          text: 'View All',
                          url: item.uri,
                        }
                      ]}
                    />
                    <PostGrid inverse={inverse} posts={menu.allWpHouseNote.nodes} />
                  </Styled.SubMenuWrapper>
                </Styled.MenuItem>
              )
            }

            if (item.uri === '/category/video/') {
              return (
                <Styled.MenuItem key={index} inverse={inverse}>
                  <Styled.MenuLink to={item.uri}>{item.label}</Styled.MenuLink>
                  <Styled.SubMenuWrapper>
                    <Title
                      title='Latest'
                      links={[
                        {
                          text: 'View All',
                          url: item.uri,
                        }
                      ]}
                    />
                    <PostGrid inverse={inverse} posts={menu.videos.nodes} />
                  </Styled.SubMenuWrapper>
                </Styled.MenuItem>
              )
            }

            if (item.uri === '/gj-sessions/') {
              return (
                <Styled.MenuItem key={index} inverse={inverse}>
                  <Styled.MenuLink to={item.uri}>{item.label}</Styled.MenuLink>
                  <Styled.SubMenuWrapper>
                    <Title
                      title='Latest'
                      links={[
                        {
                          text: 'View All',
                          url: item.uri,
                        }
                      ]}
                    />
                    <PostGrid inverse={inverse} posts={menu.sessions.nodes} />
                  </Styled.SubMenuWrapper>
                </Styled.MenuItem>
              )
            }

            return (
              <Styled.MenuItem key={index} inverse={inverse}>
                <Styled.MenuLink to={item.uri}>{item.label}</Styled.MenuLink>
              </Styled.MenuItem>
            )
          })
        }
      </Styled.MainMenu>
    </Styled.Navigation>
  )
}

export default Navigation
