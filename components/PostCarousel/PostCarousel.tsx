import React, { ReactElement, FC } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/pro-light-svg-icons'

import Thumbnail from '@components/Thumbnail'
import Paragraph from '@components/Paragraph'

import * as Styled from './styles/PostCarousel.style'

import { PostCarouselProps } from './PostCarousel.types'

const PostCarousel: FC<PostCarouselProps> = ({
  posts,
}: PostCarouselProps): ReactElement => {
  const sliderSettings = {
    dots: false,
    infinite: true,
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
    <Styled.PostCarousel>
      <Styled.Container>
        <Slider {...sliderSettings}>
          {posts.map((post, index) => {
            return (
              <Styled.Post to={post.node.uri} key={index}>
                <Thumbnail type='circle' size={1} featuredImageDatabaseId={post.node.featuredImageDatabaseId} />
                <Paragraph text={post.node.title} size={2} font='Cera' />
              </Styled.Post>
            )
          })}
        </Slider>
      </Styled.Container>
    </Styled.PostCarousel>
  )
}

export default PostCarousel
