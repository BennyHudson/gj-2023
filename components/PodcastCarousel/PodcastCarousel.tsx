import React, { ReactElement, FC } from 'react'
import Slider from 'react-slick'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/pro-thin-svg-icons'

import Section from '@components/Section'
import Title from '@components/Title'
import PodcastCard from '@components/PodcastCard'

import * as Styled from './styles/PodcastCarousel.style'

import { PodcastCarouselProps } from './PodcastCarousel.types'
import { useTheme } from 'styled-components'
import { Theme } from '@themes/gjTheme/gjTheme.types'

const PodcastCarousel: FC<PodcastCarouselProps> = ({ podcasts, title }: PodcastCarouselProps): ReactElement => {
  const { breakpoints } = useTheme() as Theme

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: breakpoints.lg,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <FontAwesomeIcon icon={faChevronCircleRight as IconProp} />,
    prevArrow: <FontAwesomeIcon icon={faChevronCircleLeft as IconProp} />,
  }

  return (
    <Styled.PodcastCarousel>
      <Head>
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
      </Head>
      <Section appearance='tertiary'>
        <Title title={title} />
        <Slider {...sliderSettings}>
          {podcasts.map((podcast, index) => {
            return <PodcastCard key={index} podcast={podcast} />
          })}
        </Slider>
      </Section>
    </Styled.PodcastCarousel>
  )
}

export default PodcastCarousel
