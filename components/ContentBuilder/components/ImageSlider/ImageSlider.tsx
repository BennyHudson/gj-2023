import React, { ReactElement, FC } from 'react'
import Head from 'next/head'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/pro-light-svg-icons'

import * as Styled from './styles/ImageSlider.style'

import { ImageSliderProps } from './ImageSlider.types'

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
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <FontAwesomeIcon icon={faChevronCircleRight as IconProp} />,
    prevArrow: <FontAwesomeIcon icon={faChevronCircleLeft as IconProp} />,
  }
  return (
    <>
      <Head>
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' /> 
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
      </Head>
      <Styled.ImageSlider>
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => {
            return (
              <Styled.Slide key={index}>
                {/* <Styled.Image key={slide} src={useFeaturedImage(slide).featuredImage} /> */}
              </Styled.Slide>
            )
          })}
        </Slider>
      </Styled.ImageSlider>
    </>
  )
}

export default ImageSlider
