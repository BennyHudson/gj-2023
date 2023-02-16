import React, { ReactElement, FC, useEffect } from 'react'
import Script from 'next/script'
import { useTheme } from 'styled-components'

import { useBreakpoints } from '@hooks/useBreakpoints'

import { Theme } from '@themes/gjTheme/gjTheme.types'

import Section from '@components/Section'

import { BannerAdProps } from './BannerAdvert.types'

import * as Styled from './styles/BannerAdvert.style'
import { useRouter } from 'next/router'

const BannerAdvert: FC<BannerAdProps> = ({ parent, slot }: BannerAdProps): ReactElement => {
  const router = useRouter()
  
  useEffect(() => {
    const googletag = window.googletag || {}
    if (router.isReady) {
      googletag.cmd.push(function() { googletag.pubads().refresh() })
    }
  }, [router])

  return (
    <Section appearance='tertiary'>
      <Styled.BannerAdvert>
        <div id={`gdp-${parent}-${slot}`}>
          <Script id={`gdp-${parent}-${slot}-script`}>
            {`googletag.cmd.push(function() { googletag.display('gdp-${parent}-${slot}'); });`}
          </Script>
        </div>
      </Styled.BannerAdvert>
    </Section>
  )
}

export default BannerAdvert
