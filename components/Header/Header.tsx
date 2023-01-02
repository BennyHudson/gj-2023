import React, { ReactElement, FC, useEffect, useState, useRef, useContext } from 'react'

import Time from './components/Time'
import Navigation from './components/Navigation'
import SecondaryNav from './components/SecondaryNav'

import PageContext, { PageContextType } from '@context/PageContext'

import Logo from '@components/Logo'

import * as Styled from './styles/Header.style'

import { HeaderProps, HeaderState } from './Header.types'

const Header: FC<HeaderProps> = ({
  headerStyle = 'standard',
}: HeaderProps): ReactElement => {
  const header = useRef<HTMLDivElement>(null)
  const { setHeaderHeight, showModal } = useContext(PageContext) as PageContextType

  const [transparent, setTransparent] = useState<HeaderState['transparent']>(headerStyle === 'feature' && !showModal) 
  
  const onScroll = (e) => {
    const scrollTop = e.target.documentElement.scrollTop
    if (scrollTop === 0 && (headerStyle === 'feature' && !showModal)) {
      setTransparent(true)
    } else {
      setTransparent(false)
    }
  }

  useEffect(() => {
    if (header.current) {
      setHeaderHeight(header.current?.clientHeight)
    }
  }, [])

  useEffect(() => {
    setTransparent(headerStyle === 'feature' && !showModal)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [headerStyle, showModal])

  return (
    <Styled.Header transparent={transparent} headerStyle={headerStyle} ref={header}>
      <Styled.HeaderContents transparent={transparent}>
        <Time inverse={transparent} />
        <Logo inverse={transparent} />
        <SecondaryNav inverse={transparent} />
      </Styled.HeaderContents>
      
    </Styled.Header>
  )
}

export default Header
