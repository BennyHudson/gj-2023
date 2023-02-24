import React, { ReactElement, FC, useEffect } from 'react'
import Script from 'next/script'

import Section from '@components/Section'

import { BannerAdProps } from './BannerAdvert.types'

import * as Styled from './styles/BannerAdvert.style'
import { useRouter } from 'next/router'

const BannerAdvert: FC<BannerAdProps> = ({ parent, slot, paddingLevel = 2 }: BannerAdProps): ReactElement => {
  const router = useRouter()
  
  useEffect(() => {
    const googletag = window.googletag || {}
    if (router.isReady) {
      googletag.cmd.push(function() { googletag.pubads().refresh() })
    }
  }, [router])

  return (
    <Section appearance='tertiary' paddingLevel={paddingLevel}>
      <Styled.BannerAdvert>
        <div id={`gdp-${parent}${slot ? `-${slot}` : ''}`}>
          <Script id={`gdp-${parent}${slot ? `-${slot}` : ''}-script`}>
            {`googletag.cmd.push(function() { googletag.display('gdp-${parent}${slot ? `-${slot}` : ''}'); });`}
          </Script>
        </div>
      </Styled.BannerAdvert>
    </Section>
  )
}

export default BannerAdvert
