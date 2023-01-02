/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement, FC } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleUp } from '@fortawesome/pro-light-svg-icons'
import dayjs from 'dayjs'

import Section from '@components/Section'
import Link from '@components/Link'
import Logo from '@components/Logo'
import Paragraph from '@components/Paragraph'

import FooterMainMenu from './components/FooterMainMenu'

import flatListToHierarchical from '@helpers/flatListToHierarchical'

import * as Styled from './styles/Footer.style'

const Footer: FC = (): ReactElement => {
  // const footerMenus = useStaticQuery(graphql`
  //   query footerMenus {
  //     primaryMenu: wpMenu(locations: {eq: FOOTER_CAT}) {
  //       menuItems {
  //         nodes {
  //           key: id
  //           label
  //           uri
  //           parentId
  //         }
  //       }
  //     }
  //     secondaryMenu: wpMenu(locations: {eq: FOOTER}) {
  //       menuItems {
  //         nodes {
  //           key: id
  //           label
  //           uri
  //           parentId
  //         }
  //       }
  //     }
  //     legalMenu: wpMenu(locations: {eq: FOOTER_INFO}) {
  //       menuItems {
  //         nodes {
  //           key: id
  //           label
  //           uri
  //           parentId
  //         }
  //       }
  //     }
  //   }
  // `)

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth',
    })
  }

  return (
    <Styled.Footer>
      <Section appearance='secondary'>
        <Styled.Top>
          <Logo inverse />
          <Styled.ScrollUp onClick={scrollToTop}><FontAwesomeIcon icon={faAngleDoubleUp as IconProp} size='2x' /> Back to Top</Styled.ScrollUp>
        </Styled.Top>
        <Styled.Main>
          {/*<FooterMainMenu menu={flatListToHierarchical(footerMenus.primaryMenu.menuItems.nodes)} />*/}
          <Styled.SecondaryMenu>
            <ul>
              {/* {footerMenus.secondaryMenu.menuItems.nodes.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.uri} font='Cera' inverse size={1} transform='uppercase'>{item.label}</Link>
                  </li>
                )
              })} */}
            </ul>
          </Styled.SecondaryMenu>
        </Styled.Main>
        <Styled.Meta>
          <Styled.LegalMenu>
            {/* {footerMenus.legalMenu.menuItems.nodes.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.uri} font='Cera' inverse size={1} transform='uppercase'>{item.label}</Link>
                </li>
              )
            })} */}
          </Styled.LegalMenu>
          <Paragraph inverse size={1} font='Cera'>Copyright © 2012-{dayjs().year()} The Gentleman's Journal. All rights reserved</Paragraph>
        </Styled.Meta>
      </Section>
    </Styled.Footer>
  )
}

export default Footer
