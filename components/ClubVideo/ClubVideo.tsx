import React, { ReactElement, FC, useContext } from 'react'

import * as Styled from './styles/ClubVideo.style'

import { ClubVideoProps } from './ClubVideo.types'
import featuredImageUrl from '@helpers/featuredImageUrl'
import PageContext, { PageContextProps } from '@context/PageContext'

const ClubVideo: FC<ClubVideoProps> = ({
  video,
  poster,
}: ClubVideoProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
  return (
    <Styled.ClubVideo headerHeight={headerHeight} src={video} playsInline muted autoPlay poster={featuredImageUrl(poster)} loop />
  )
}

export default ClubVideo
