import { useRouter } from 'next/router'
import Script from 'next/script'
import type { FC, ReactElement } from 'react'
import React, { useEffect } from 'react'

import * as Styled from './styles/TowerAdvert.style'
import type { TowerAdvertProps } from './TowerAdvert.types'

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
