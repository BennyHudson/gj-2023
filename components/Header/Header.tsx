import React, { ReactElement, FC, useEffect, useState, useRef, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/pro-light-svg-icons'

import Time from './components/Time'
import Navigation from './components/Navigation'
import SecondaryNav from './components/SecondaryNav'
import MobileNavigation from './components/MobileNavigation'

import { useBreakpoints } from '@hooks/useBreakpoints'

import PageContext, { PageContextProps } from '@context/PageContext'

import Logo from '@components/Logo'

import * as Styled from './styles/Header.style'

import { HeaderProps, HeaderState } from './Header.types'

const Header: FC<HeaderProps> = ({ headerStyle = 'standard', headerNav }: HeaderProps): ReactElement => {
  const header = useRef<HTMLDivElement>(null)
  const announcement = useRef<HTMLDivElement>(null)
  const { setHeaderHeight } = useContext(PageContext) as PageContextProps

  const breakpoints = useBreakpoints()
  const { mdAndBelow, lgAndAbove } = breakpoints

  const [transparent, setTransparent] = useState<HeaderState['transparent']>(headerStyle === 'feature')
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [topPosition, setTopPosition] = useState(0)

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
  }, [headerStyle])

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
          <Logo inverse={transparent} />
          <SecondaryNav inverse={transparent} />
        </Styled.HeaderContents>
        {mdAndBelow && showMobileNav && <MobileNavigation inverse={transparent} navigation={headerNav} />}
        {lgAndAbove && <Navigation inverse={transparent} navigation={headerNav} />}
      </Styled.Header>
    </>
  )
}

export default Header
