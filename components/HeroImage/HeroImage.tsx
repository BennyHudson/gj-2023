import Head from 'next/head'
import type { FC, ReactElement} from 'react'
import React, { useContext } from 'react'
import YouTube from 'react-youtube'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { HeroImageProps } from './HeroImage.types'
import * as Styled from './styles/HeroImage.style'

const HeroImage: FC<HeroImageProps> = ({ featuredImage, height = 2, featuredVideo }: HeroImageProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps

  const videoOptions = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <>
      <Head>
        <link rel='preload' href={featuredImageUrl(featuredImage)} as='image' />
      </Head>
      <Styled.HeroImage
        height={height}
        backgroundImage={featuredImageUrl(featuredImage)}
        headerHeight={headerHeight}
        hasVideo={!!featuredVideo}
      >
        {featuredVideo && (
          <Styled.VideoWrapper height={height} headerHeight={headerHeight}>
            <Styled.Video headerHeight={headerHeight}>
              <YouTube videoId={featuredVideo} opts={videoOptions} className='video-wrapper' />
            </Styled.Video>
          </Styled.VideoWrapper>
        )}
        {/* {featuredImage && <Image src={featuredImageUrl(featuredImage)} key={featuredImage} fill alt='' quality={100} priority />} */}
      </Styled.HeroImage>
    </>
  )
}

export default HeroImage
