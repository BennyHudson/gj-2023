import type { FC, ReactElement } from 'react'
import React from 'react'

import * as Styled from './styles/VideoBlock.style'
import type { VideoBlockProps } from './VideoBlock.types'

const VideoBlock: FC<VideoBlockProps> = ({ videoUrl }: VideoBlockProps): ReactElement => {
  let videoId = videoUrl.split('=')[1]
  if (!videoUrl.includes('=')) {
    const videoArray = videoUrl.split('/')
    videoId = videoArray[videoArray.length - 1]
  }
  return (
    <Styled.VideoBlock>
      <iframe
        width='853'
        height='480'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </Styled.VideoBlock>
  )
}

export default VideoBlock
