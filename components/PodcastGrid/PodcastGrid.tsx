import Head from 'next/head'
import type { FC, ReactElement } from 'react'
import React from 'react'
import Slider from 'react-slick'

import Heading from '@components/Heading'
import Meta from '@components/Meta'
import Paragraph from '@components/Paragraph'
import Thumbnail from '@components/Thumbnail'

import { useBreakpoints } from '@hooks/useBreakpoints'

import type { PodcastGridProps } from './PodcastGrid.types'
import * as Styled from './styles/PodcastGrid.style'

const PodcastGrid: FC<PodcastGridProps> = ({ podcasts }: PodcastGridProps): ReactElement => {
  const { sm, mdAndAbove } = useBreakpoints()

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Styled.PodcastGrid>
      <Styled.FeaturedPodcast>
        <Thumbnail to={podcasts[0].uri} featuredImage={podcasts[0].featuredImage.node.medium} />
        <Styled.FeatureDetails href={podcasts[0].uri}>
          <Meta date={podcasts[0].date} />
          <Heading text={podcasts[0].title} size={3} font='ChronicleCondensed' />
          <Paragraph font='Cera' weight={1} size={2} appearance='secondary'>
            {podcasts[0].podcasts.podcastMeta.guest.name}, {podcasts[0].podcasts.podcastMeta.guest.about}
          </Paragraph>
        </Styled.FeatureDetails>
      </Styled.FeaturedPodcast>
      {sm && (
        <>
          <Head>
            <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
          </Head>
          <Styled.PostCarousel>
            <Slider {...sliderSettings}>
              {podcasts.slice(1).map((podcast, index) => {
                return (
                  <Styled.Podcast key={index}>
                    <Styled.PodcastDetails href={podcast.uri}>
                      <Meta date={podcasts[0].date} />
                      <Heading size={1} text={podcast.title} font='ChronicleCondensed' />
                      <Paragraph font='Cera' weight={1} size={1} appearance='secondary'>
                        {podcast.podcasts.podcastMeta.guest.name}, {podcast.podcasts.podcastMeta.guest.about}
                      </Paragraph>
                    </Styled.PodcastDetails>
                  </Styled.Podcast>
                )
              })}
            </Slider>
          </Styled.PostCarousel>
        </>
      )}
      {mdAndAbove && (
        <Styled.PodcastList>
          {podcasts.slice(1).map((podcast, index) => {
            return (
              <Styled.Podcast key={index}>
                <Thumbnail type='circle' to={podcast.uri} featuredImage={podcast.featuredImage.node.squareThumb} />
                <Styled.PodcastDetails href={podcast.uri}>
                  <Meta date={podcasts[0].date} />
                  <Heading size={1} text={podcast.title} font='ChronicleCondensed' />
                  <Paragraph font='Cera' weight={1} size={1} appearance='secondary'>
                    {podcast.podcasts.podcastMeta.guest.name}, {podcast.podcasts.podcastMeta.guest.about}
                  </Paragraph>
                </Styled.PodcastDetails>
              </Styled.Podcast>
            )
          })}
        </Styled.PodcastList>
      )}
    </Styled.PodcastGrid>
  )
}

export default PodcastGrid
