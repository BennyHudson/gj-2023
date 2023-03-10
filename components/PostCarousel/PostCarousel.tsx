import React, { ReactElement, FC, useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/pro-thin-svg-icons'

import * as Styled from './styles/PostCarousel.style'

import PageContext, { PageContextProps } from '@context/PageContext'
import CarouselPost from './components/CarouselPost/CarouselPost'

const PostCarousel: FC = (): ReactElement => {
  const { cmsUrl } = useContext(PageContext) as PageContextProps
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const page = Math.floor(Math.random() * 101)
    const postRequest = await fetch(`${cmsUrl}/wp-json/wp/v2/articles?page=${page}`)
    
    if (!postRequest) return 

    const postResponse = await postRequest.json()
    setPosts(postResponse)
  }

  useEffect(() => {
    getPosts()
  }, [])

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
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <FontAwesomeIcon icon={faChevronCircleRight as IconProp} />,
    prevArrow: <FontAwesomeIcon icon={faChevronCircleLeft as IconProp} />,
  }

  return (
    <Styled.PostCarousel>
      <Head>
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
      </Head>
      <Styled.Container>
        <Slider {...sliderSettings}>
          {posts.map((post, index) => {
            return <CarouselPost key={index} featuredImageId={post.featured_media} slug={post.slug} title={post.title.rendered} />
          })}
        </Slider>
      </Styled.Container>
    </Styled.PostCarousel>
  )
}

export default PostCarousel
