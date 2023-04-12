import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement} from 'react'
import React, { useContext, useEffect, useRef, useState } from 'react'

import Logo from '@components/Logo'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import { useBreakpoints } from '@hooks/useBreakpoints'

import MobileNavigation from './components/MobileNavigation'
import Navigation from './components/Navigation'
import SecondaryNav from './components/SecondaryNav'
import Time from './components/Time'
import type { HeaderProps, HeaderState } from './Header.types'
import * as Styled from './styles/Header.style'

const Header: FC<HeaderProps> = ({ headerStyle = 'standard', headerNav }: HeaderProps): ReactElement => {
  const header = useRef<HTMLDivElement>(null)
  const announcement = useRef<HTMLDivElement>(null)
  const { setHeaderHeight } = useContext(PageContext) as PageContextProps

  const breakpoints = useBreakpoints()
  const { sm, mdAndBelow, lgAndAbove } = breakpoints

  const [transparent, setTransparent] = useState<HeaderState['transparent']>(headerStyle === 'feature')
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [topPosition, setTopPosition] = useState(0)
  const [gLogo, setGLogo] = useState(false)

  const announcementBar = headerNav.page.subscriptionPage.club.clubhouseOffer
  const showAnnouncementBar = !!announcementBar

  const onScroll = (e) => {
    const scrollTop = e.target.documentElement.scrollTop
    if (scrollTop === 0 && headerStyle === 'feature') {
      setTransparent(true)
    } else {
      setTransparent(false)
    }

    if (showAnnouncementBar && headerStyle === 'feature' && announcement.current) {
      if (scrollTop >= announcement.current.clientHeight) {
        setTopPosition(0)
      }

      if (scrollTop < announcement.current.clientHeight) {
        setTopPosition(announcement.current.clientHeight - scrollTop)
      }
    }

    if (sm && scrollTop > 0) {
      setGLogo(true)
    } else {
      setGLogo(false)
    }
  }

  useEffect(() => {
    if (announcement.current) {
      setTopPosition(announcement.current.clientHeight)
    }
    if (header.current) {
      setHeaderHeight(header.current?.clientHeight)
    }
  }, [breakpoints])

  useEffect(() => {
    setTransparent(headerStyle === 'feature')
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [headerStyle, breakpoints])

  return (
    <>
      {showAnnouncementBar && <Styled.AnnouncementBar ref={announcement}>{announcementBar}</Styled.AnnouncementBar>}
      <Styled.Header transparent={transparent} headerStyle={headerStyle} ref={header} fixed={showMobileNav} topPosition={topPosition}>
        <Styled.HeaderContents transparent={transparent}>
          {mdAndBelow && (
            <Styled.MobileTrigger>
              <Styled.MobileNavTrigger onClick={() => setShowMobileNav(!showMobileNav)} $inverse={transparent}>
                <FontAwesomeIcon icon={showMobileNav ? (faTimes as IconProp) : (faBars as IconProp)} />
              </Styled.MobileNavTrigger>
            </Styled.MobileTrigger>
          )}
          {lgAndAbove && <Time inverse={transparent} />}
          <Logo inverse={transparent} gLogo={gLogo} />
          <SecondaryNav inverse={transparent} />
        </Styled.HeaderContents>
        {mdAndBelow && showMobileNav && <MobileNavigation inverse={transparent} navigation={headerNav} />}
        {lgAndAbove && <Navigation inverse={transparent} navigation={headerNav} />}
      </Styled.Header>
    </>
  )
}

export default Header
