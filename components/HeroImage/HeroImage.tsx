import React, { ReactElement, FC, useContext } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import YouTube from 'react-youtube'

import featuredImageUrl from '@helpers/featuredImageUrl'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/HeroImage.style'

import { HeroImageProps } from './HeroImage.types'

const HeroImage: FC<HeroImageProps> = ({ featuredImage, height = 2, featuredVideo }: HeroImageProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps

  const videoOptions = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  return (
    <>
      <Head>
        <link
          rel="preload"
          href={featuredImageUrl(featuredImage)}
          as="image"
        />
      </Head>
      <Styled.HeroImage height={height} backgroundImage={featuredImageUrl(featuredImage)}>
        {featuredVideo &&
          <Styled.VideoWrapper height={height} headerHeight={headerHeight}>
            <Styled.Video headerHeight={headerHeight}>
              <YouTube
                videoId={featuredVideo}
                opts={videoOptions}
                className='video-wrapper'
              />
            </Styled.Video>
          </Styled.VideoWrapper>
        }
        {/* {featuredImage && <Image src={featuredImageUrl(featuredImage)} key={featuredImage} fill alt='' quality={100} priority />} */}
      </Styled.HeroImage>
    </>
  )
}

export default HeroImage
