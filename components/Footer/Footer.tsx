/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleUp } from '@fortawesome/pro-light-svg-icons'
import dayjs from 'dayjs'
import { useQuery } from '@apollo/client'

import { footerNavQuery } from '@queries/global/footer-nav'

import Section from '@components/Section'
import Link from '@components/Link'
import Logo from '@components/Logo'
import Paragraph from '@components/Paragraph'

import FooterMainMenu from './components/FooterMainMenu'

import flatListToHierarchical from '@helpers/flatListToHierarchical'

import { NavigationProps } from './Footer.types'

import * as Styled from './styles/Footer.style'

const Footer: FC = (): ReactElement => {
  const { data } = useQuery(footerNavQuery.query) as NavigationProps

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
        {data && 
          <>
            <Styled.Main>
              <FooterMainMenu menu={flatListToHierarchical(data.primaryMenu.menuItems.nodes)} />
              <Styled.SecondaryMenu>
                <ul>
                  {data.secondaryMenu.menuItems.nodes.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to={item.uri} font='Cera' inverse size={1} transform='uppercase'>{item.label}</Link>
                      </li>
                    )
                  })}
                </ul>
              </Styled.SecondaryMenu>
            </Styled.Main>
            <Styled.Meta>
              <Styled.LegalMenu>
                {data.legalMenu.menuItems.nodes.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.uri} font='Cera' inverse size={1} transform='uppercase'>{item.label}</Link>
                    </li>
                  )
                })}
              </Styled.LegalMenu>
              <Paragraph inverse size={1} font='Cera'>Copyright © 2012-{dayjs().year()} The Gentleman's Journal. All rights reserved</Paragraph>
            </Styled.Meta>
          </>
        }
      </Section>
    </Styled.Footer>
  )
}

export default Footer
