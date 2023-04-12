import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import React from 'react'
import type { ReactElement, FC } from 'react'
import Slider from 'react-slick'

import { useTheme } from 'styled-components'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import Thumbnail from '@components/Thumbnail'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { Theme } from '@themes/gjTheme/gjTheme.types'

import type { PartnerCarouselProps } from './PartnerCarousel.types'

import * as Styled from './styles/PartnerCarousel.style'

const PartnerCarousel: FC<PartnerCarouselProps> = ({
  title,
  partners,
}: PartnerCarouselProps): ReactElement => {
  const { breakpoints } = useTheme() as Theme

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faChevronCircleRight as IconProp} />,
    prevArrow: <FontAwesomeIcon icon={faChevronCircleLeft as IconProp} />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: breakpoints.lg,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  }

  return (
    <Styled.PartnerCarousel>
      <Head>
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
      </Head>
      <Heading text={title} inverse font='ChronicleCondensed' size={3} />
      <Slider {...sliderSettings}>
        {partners.map((partner, index) => {
          return (
            <Styled.PartnerCard key={index}>
              <Thumbnail featuredImage={featuredImageUrl(partner.featuredImage.node.sourceUrl)} />
              <Styled.PartnerContent>
                <Heading text={partner.title} inverse size={2} font='ChronicleCondensed' noMargin />
                <Paragraph text={partner.clubhousePartners.partnerInformation.offer} inverse size={2} font='Cera' />
              </Styled.PartnerContent>
            </Styled.PartnerCard>
          )
        })}
      </Slider>
    </Styled.PartnerCarousel>
  )
}

export default PartnerCarousel
