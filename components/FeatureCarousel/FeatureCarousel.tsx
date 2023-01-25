import React, { ReactElement, FC, useState, useContext } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Head from 'next/head'

import featuredImageUrl from '@helpers/featuredImageUrl'

import Section from '@components/Section'
import Title from '@components/Title'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Meta from '@components/Meta'
import Link from '@components/Link'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/FeatureCarousel.style'

import { FeatureCarouselProps } from './FeatureCarousel.types'
import Overlay from '@components/Overlay'
import { useBreakpoints } from '@hooks/useBreakpoints'

const FeatureCarousel: FC<FeatureCarouselProps> = ({
  title,
  links,
  posts,
  cta,
  height = 1,
  priority = true,
}: FeatureCarouselProps): ReactElement => {
  const { mdAndBelow, lgAndAbove, xl } = useBreakpoints()
  const { headerHeight } = useContext(PageContext) as PageContextProps
  const [activeIndex, setActiveIndex] = useState(0)

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
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
    <Styled.FeatureCarousel headerHeight={headerHeight} height={height}>
      <Section appearance='secondary' containerWidth='wide'>
        {title && <Title title={title} links={links} inverse />}
        {mdAndBelow && (
          <>
            <Head>
              <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
            </Head>
            <Styled.Slider>
              <Slider {...sliderSettings}>
                {posts.map((post, index) => {
                  return (
                    <Styled.Slide key={index}>
                      <Styled.PostTitle>
                        <Meta date={post.date} categories={post.categories} inverse />
                        {post.meta && <Heading size={1} text={post.meta!} inverse font='Cera' />}
                        <Heading text={post.title} size={4} inverse font='ChronicleCondensed' />
                        <Link to={post.uri} size={1} weight={3} inverse font='Cera' showIcon>
                          {cta}
                        </Link>
                      </Styled.PostTitle>
                      <Overlay />
                      <Image src={featuredImageUrl(post.featuredImage.node.sourceUrl)!} fill alt='' key={index} priority={priority} />
                    </Styled.Slide>
                  )
                })}
              </Slider>
            </Styled.Slider>
          </>
        )}
        {lgAndAbove && (
          <>
            <Styled.PostTitle>
              <Meta date={posts[activeIndex].date} categories={posts[activeIndex].categories} inverse />
              {posts[activeIndex].meta && <Heading size={1} text={posts[activeIndex].meta!} inverse font='Cera' />}
              <Heading text={posts[activeIndex].title} size={4} inverse font='ChronicleCondensed' />
              <Link to={posts[activeIndex].uri} size={1} weight={3} inverse font='Cera' showIcon>
                {cta}
              </Link>
            </Styled.PostTitle>
            <Styled.Thumbs activeIndex={activeIndex} count={posts.length}>
              {posts.map((post, index) => {
                return (
                  <li key={index}>
                    <Styled.Index $active={index === activeIndex}>{index + 1}</Styled.Index>
                    <Styled.Thumb onClick={() => setActiveIndex(index)}>
                      <Paragraph font='Cera' size={2} inverse>
                        {post.title}
                      </Paragraph>
                      {xl &&
                        <Paragraph font='Cera' size={2} inverse>
                          {post.subtitle}
                        </Paragraph>
                      }
                    </Styled.Thumb>
                  </li>
                )
              })}
            </Styled.Thumbs>
          </>
        )}
      </Section>
      {lgAndAbove && (
        <Styled.ImageWrapper>
          <Overlay />
          {posts.map((post, index) => {
            if (index !== activeIndex) return
            return <Image src={featuredImageUrl(post.featuredImage.node.sourceUrl)!} fill alt='' key={index} priority={priority} />
          })}
        </Styled.ImageWrapper>
      )}
    </Styled.FeatureCarousel>
  )
}

export default FeatureCarousel
