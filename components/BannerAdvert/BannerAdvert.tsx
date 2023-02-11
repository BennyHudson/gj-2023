import React, { ReactElement, FC } from 'react'
import Script from 'next/script'
import { useTheme } from 'styled-components'

import { useBreakpoints } from '@hooks/useBreakpoints'

import { Theme } from '@themes/gjTheme/gjTheme.types'

import Section from '@components/Section'

import { BannerAdProps } from './BannerAdvert.types'

import * as Styled from './styles/BannerAdvert.style'

const BannerAdvert: FC<BannerAdProps> = ({ slot }: BannerAdProps): ReactElement => {
  const { md } = useBreakpoints()
  const { breakpoints } = useTheme() as Theme
  return (
    <Section appearance='tertiary'>
      <Styled.BannerAdvert>
        <Script id={`gdp-${slot}-main`}>
          {`
            window.googletag = window.googletag || {cmd: []};
            googletag.cmd.push(function() {
              const sizeMappings = googletag.sizeMapping()
                .addSize([${breakpoints.lg}, 0], [970, 250])
                .addSize([${breakpoints.md}, 0], [728, 210])
                .addSize([0, 0], [300, 250])
                .build();
              
              googletag.defineSlot('/113638206/gj_970x250/${slot}', [[970, 250], [300, 250], [728, 210]], 'gdp-${slot}')
                .defineSizeMapping(sizeMappings)
                .addService(googletag.pubads());
              
              googletag.pubads().enableSingleRequest();
              googletag.enableServices();
            });
          `}
        </Script>
        <div id={`gdp-${slot}`} style={{minWidth: 300, minHeight: md ? 210 : 250}}>
          <Script id={`gdp-${slot}-script`}>
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
