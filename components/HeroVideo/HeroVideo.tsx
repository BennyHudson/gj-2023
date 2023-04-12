import type { FC, ReactElement} from 'react'
import React, { useContext } from 'react'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { HeroVideoProps } from './HeroVideo.types'
import * as Styled from './styles/HeroVideo.style'

const HeroVideo: FC<HeroVideoProps> = ({ video }: HeroVideoProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
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
