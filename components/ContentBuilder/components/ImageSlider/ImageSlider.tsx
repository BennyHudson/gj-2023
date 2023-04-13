import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React from 'react'
import Slider from 'react-slick'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { ImageSliderProps } from './ImageSlider.types'
import * as Styled from './styles/ImageSlider.style'

const ImageSlider: FC<ImageSliderProps> = ({ slides }: ImageSliderProps): ReactElement => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    nextArrow: <FontAwesomeIcon icon={faChevronCircleRight as IconProp} />,
    prevArrow: <FontAwesomeIcon icon={faChevronCircleLeft as IconProp} />,
  }

  return (
    <>
      <Head>
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
      </Head>
      <Styled.ImageSlider>
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => {
            return (
              <Styled.Slide key={index}>
                <Image key={slide.medium} src={featuredImageUrl(slide.medium)} width={360} height={240} alt='' />
              </Styled.Slide>
            )
          })}
        </Slider>
      </Styled.ImageSlider>
    </>
  )
}

export default ImageSlider
