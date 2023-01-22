import React, { ReactElement, FC } from 'react'
import Head from 'next/head'
import Slider from 'react-slick'
import PostExcerpt from '@components/PostExcerpt'

import * as Styled from './styles/PostGrid.style'

import { PostGridProps } from './PostGrid.types'
import { useBreakpoints } from '@hooks/useBreakpoints'

const PostGrid: FC<PostGridProps> = ({
  posts,
  columns = 4,
  inverse = false,
  priority = true,
  smCarousel = false,
}: PostGridProps): ReactElement => {
  const { sm } = useBreakpoints()

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
          slidesToScroll: 1
        }
      }
    ],
  }

  return (
    <>
      {sm && smCarousel ? 
        <>
          <Head>
            <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' /> 
          </Head>
          <Styled.PostCarousel>
            <Slider {...sliderSettings}>
              {posts.map((post, index) => {
                return (
                  <PostExcerpt
                    priority={priority && index < 8}
                    key={index} 
                    inverse={inverse} 
                    {...post}
                  />
                )
              })}
            </Slider>
          </Styled.PostCarousel>
        </>
        :
        <Styled.PostGrid columns={columns}>
          {posts.map((post, index) => {
            return (
              <PostExcerpt
                priority={priority && index < 8}
                key={index} 
                inverse={inverse} 
                {...post}
              />
            )
          })}
        </Styled.PostGrid>
      }
    </>
  )
}

export default PostGrid
