import React, { ReactElement, FC, useState, useContext } from 'react'
import Image from 'next/image'

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

const FeatureCarousel: FC<FeatureCarouselProps> = ({
  title,
  links,
  posts,
  cta,
}: FeatureCarouselProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
  const [activeIndex, setActiveIndex] = useState(0)
  
  return (
    <Styled.FeatureCarousel headerHeight={headerHeight}>
      <Section appearance='secondary' containerWidth='wide'>
        {title && <Title title={title} links={links} inverse />}
        <Styled.Title>
          <Meta date={posts[activeIndex].date} categories={posts[activeIndex].categories} inverse />
          {posts[activeIndex].meta && <Heading size={1} text={posts[activeIndex].meta!} inverse font='Cera' />}
          <Heading text={posts[activeIndex].title} size={4} inverse font='ChronicleCondensed' />
          <Link to={posts[activeIndex].uri} size={1} weight={3} inverse font='Cera' showIcon>{cta}</Link>
        </Styled.Title>
        <Styled.Thumbs activeIndex={activeIndex} count={posts.length}>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Styled.Index $active={index === activeIndex}>{index + 1}</Styled.Index>
                <Styled.Thumb onClick={() => setActiveIndex(index)}>
                  <Paragraph font='Cera' size={2} inverse>{post.title}</Paragraph>
                  <Paragraph font='Cera' size={2} inverse>{post.subtitle}</Paragraph>
                </Styled.Thumb>
              </li>
            )
          })}
        </Styled.Thumbs>
      </Section>
      <Styled.ImageWrapper>
        {posts.map((post, index) => {
          if (index !== activeIndex) return
          return (
            <Image src={featuredImageUrl(post.featuredImage.node.sourceUrl)} fill alt='' key={index} priority />
          )
        })}
      </Styled.ImageWrapper>
    </Styled.FeatureCarousel>
  )
}

export default FeatureCarousel
