import React, { ReactElement, FC } from 'react'
import Script from 'next/script'

import Section from '@components/Section'

import { BannerAdProps } from './BannerAdvert.types'

import * as Styled from './styles/BannerAdvert.style'

const BannerAdvert: FC<BannerAdProps> = ({ slot }: BannerAdProps): ReactElement => {
  return (
    <Section appearance='tertiary'>
      <Styled.BannerAdvert>
        <Script id='google-double-click'>
          {`
            window.googletag = window.googletag || {cmd: []};
            googletag.cmd.push(function() {
              googletag.defineSlot('/113638206/gj_970x250/GJ_970x250_001', [[970, 250], [300, 250], [728, 210]], 'gdp-GJ_970x250_001').addService(googletag.pubads());
              googletag.defineSlot('/113638206/gj_970x250/GJ_970x250_002', [[970, 250], [300, 250], [728, 210]], 'gdp-GJ_970x250_002').addService(googletag.pubads());
              googletag.pubads().enableSingleRequest();
              googletag.enableServices();
            });
          `}
        </Script>
        <div id={`gdp-${slot}`} style={{minWidth: 300, minHeight: 210,}}>
          <Script id='gdp'>
            {`
              googletag.cmd.push(function() { googletag.display('gdp-${slot}'); });
            `}
          </Script>
        </div>
      </Styled.BannerAdvert>
    </Section>
  )
}

export default BannerAdvert
