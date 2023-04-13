import type { FC, ReactElement } from 'react'
import React, { useContext } from 'react'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { ClubVideoProps } from './ClubVideo.types'
import * as Styled from './styles/ClubVideo.style'

const ClubVideo: FC<ClubVideoProps> = ({ video, poster }: ClubVideoProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
  return <Styled.ClubVideo headerHeight={headerHeight} src={video} playsInline muted autoPlay poster={featuredImageUrl(poster)} loop />
}

export default ClubVideo
