/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleUp } from '@fortawesome/pro-thin-svg-icons'
import dayjs from 'dayjs'

import Section from '@components/Section'
import Link from '@components/Link'
import Logo from '@components/Logo'
import Paragraph from '@components/Paragraph'

import FooterMainMenu from './components/FooterMainMenu'

import flatListToHierarchical from '@helpers/flatListToHierarchical'

import { FooterProps } from './Footer.types'

import * as Styled from './styles/Footer.style'
import { useBreakpoints } from '@hooks/useBreakpoints'

const Footer: FC<FooterProps> = ({ footerNav }: FooterProps): ReactElement => {
  const { mdAndAbove } = useBreakpoints()

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
          <Logo inverse smLogo />
          <Styled.ScrollUp onClick={scrollToTop}><FontAwesomeIcon icon={faAngleDoubleUp as IconProp} size='2x' /> Back to Top</Styled.ScrollUp>
        </Styled.Top>
        <Styled.Main>
          {mdAndAbove && <FooterMainMenu menu={flatListToHierarchical(footerNav.primaryMenu.menuItems.nodes)} />}
          <Styled.SecondaryMenu>
            <ul>
              {footerNav.secondaryMenu.menuItems.nodes.map((item, index) => {
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
            {footerNav.legalMenu.menuItems.nodes.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.uri} font='Cera' inverse size={1} transform='uppercase'>{item.label}</Link>
                </li>
              )
            })}
          </Styled.LegalMenu>
          <Paragraph inverse size={1} font='Cera'>Copyright © 2012-{dayjs().year()} The Gentleman's Journal. All rights reserved</Paragraph>
        </Styled.Meta>
      </Section>
    </Styled.Footer>
  )
}

export default Footer
