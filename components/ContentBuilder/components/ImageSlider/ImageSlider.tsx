import React, { ReactElement, FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/pro-light-svg-icons'

import useFeaturedImage from '@hooks/useFeaturedImage'

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
    nextArrow: <FontAwesomeIcon icon={faChevronCircleRight} />,
    prevArrow: <FontAwesomeIcon icon={faChevronCircleLeft} />,
  }
  return (
    <Styled.ImageSlider>
      <Slider {...sliderSettings}>
        {slides.map((slide) => {
          return (
            <Styled.Slide>
              <Styled.Image key={slide} src={useFeaturedImage(slide).featuredImage} />
            </Styled.Slide>
          )
        })}
      </Slider>
    </Styled.ImageSlider>
  )
}

export default ImageSlider
