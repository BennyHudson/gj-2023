import React, { ReactElement, FC, useEffect } from 'react'

import * as Styled from './styles/TowerAdvert.style'

import { TowerAdvertProps } from './TowerAdvert.types'
import Script from 'next/script'
import { useRouter } from 'next/router'

const TowerAdvert: FC<TowerAdvertProps> = ({ parent, slot }: TowerAdvertProps): ReactElement => {
  const router = useRouter()

  useEffect(() => {
    const googletag = window.googletag || {}
    if (router.isReady) {
      googletag.cmd.push(function () {
        googletag.pubads().refresh()
      })
    }
  }, [router])

  return (
    <Styled.TowerAdvert>
      <div id={`gdp-${parent}${slot ? `-${slot}` : ''}`}>
        <Script id={`gdp-${parent}${slot ? `-${slot}` : ''}-script`}>
          {`googletag.cmd.push(function() { googletag.display('gdp-${parent}${slot ? `-${slot}` : ''}'); });`}
        </Script>
      </div>
    </Styled.TowerAdvert>
  )
}

export default TowerAdvert
