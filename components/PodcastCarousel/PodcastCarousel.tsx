import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement } from 'react'
import React from 'react'
import Slider from 'react-slick'
import { useTheme } from 'styled-components'

import PodcastCard from '@components/PodcastCard'
import Section from '@components/Section'
import Title from '@components/Title'

import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { PodcastCarouselProps } from './PodcastCarousel.types'
import * as Styled from './styles/PodcastCarousel.style'

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
