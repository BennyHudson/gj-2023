import React, { ReactElement, FC, useContext } from 'react'

import PageContext, { PageContextType } from '@context/PageContext'

import * as Styled from './styles/HeroVideo.style'

import { HeroVideoProps } from './HeroVideo.types'

const HeroVideo: FC<HeroVideoProps> = ({
  video,
}: HeroVideoProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextType
  let videoId = video.split('=')[1]
  if (!video.includes('=')) { 
    const videoArray = video.split('/')
    videoId = videoArray[videoArray.length - 1]
  }

  return (
    <Styled.HeroVideo headerHeight={headerHeight}>
      <Styled.VideoWrapper>
        <iframe
          width='853'
          height='480'
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      </Styled.VideoWrapper>
    </Styled.HeroVideo>
  )
}

export default HeroVideo
