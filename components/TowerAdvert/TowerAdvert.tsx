import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/TowerAdvert.style'

import { TowerAdvertProps } from './TowerAdvert.types'
import Script from 'next/script'

const TowerAdvert: FC<TowerAdvertProps> = ({
  slot,
}: TowerAdvertProps): ReactElement => {
  return (
    <Styled.TowerAdvert>
      <Script id={`gdp-${slot}-main`}>
        {`
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {    
            googletag.defineSlot('/113638206/GJ_300x600/GJ_300x600_001', [300, 600], 'gdp-${slot}').addService(googletag.pubads());        
            
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
          });
        `}
      </Script>
      <div id={`gdp-${slot}`} style={{ minHeight: 600 }}>
        <Script id={`gdp-${slot}-script`}>
          {`
            googletag.cmd.push(function() { googletag.display('gdp-${slot}'); });
          `}
        </Script>
      </div>
    </Styled.TowerAdvert>
  )
}

export default TowerAdvert
