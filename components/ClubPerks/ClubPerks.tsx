import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React, { useRef } from 'react'
import Slider from 'react-slick'

import Heading from '@components/Heading'
import Link from '@components/Link'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Section from '@components/Section'
import Title from '@components/Title'

import featuredImageUrl from '@helpers/featuredImageUrl'

import { useBreakpoints } from '@hooks/useBreakpoints'
import useNextLink from '@hooks/useNextLink'

import type { ClubPerksProps } from './ClubPerks.types'
import * as Styled from './styles/ClubPerks.style'
import Head from 'next/head'

const ClubPerks: FC<ClubPerksProps> = ({ perks, title, subtitle, brands }: ClubPerksProps): ReactElement => {
  const perksList = useRef<HTMLDivElement>(null)
  useNextLink(perksList)

  const { sm, mdAndAbove } = useBreakpoints()

  const chunkSize = 3
  const perkChunks = perks.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/chunkSize)

    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  const sliderSettings = {
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: false,
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: breakpoints.lg,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  }

  return (
    <>
      {perkChunks.map((chunk, i) => {
        return (
          <>
            <Section>
              <Styled.ClubPerks ref={perksList}>
                {(title && i === 0) && <Title title={title} subtitle={subtitle} />}
                {chunk.map((perk, index) => {
                  return (
                    <Styled.Perk key={index} reverse={perk.textAlignement === 'Right'}>
                      {mdAndAbove ? (
                        <Image src={featuredImageUrl(perk.backgroundImage.fullSize)} fill alt={perk.title} quality={100} />
                      ) : (
                        <Image src={featuredImageUrl(perk.backgroundImageMobile.fullSize)} alt={perk.title} quality={100} width={480} height={360} />
                      )}
                      <Styled.PerkContent>
                        <Heading inverse={sm ? true : perk.textColor === 'Light'} text={perk.title} size={3} font='ChronicleCondensed' noMargin />
                        <RawHtmlWrapper inverse={sm ? true : perk.textColor === 'Light'} content={perk.content} font='Cera' />
                        {perk.hasLink && (
                          <Link href={perk.link!.url} font='Cera' showIcon inverse={sm ? true : perk.textColor === 'Light'} size={2}>
                            {perk.link!.title}
                          </Link>
                        )}
                      </Styled.PerkContent>
                    </Styled.Perk>
                  )
                })}
              </Styled.ClubPerks>
            </Section>
            {i === 0 && 
              <Styled.Logos>
                <Title title='Membership Covers 40+ Handpicked Brands' />
                <Head>
                  <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
                </Head>
                <Slider {...sliderSettings}>
                  {brands.map((brand, index) => {
                    return (
                      <Image src={featuredImageUrl(brand.logo.sourceUrl)} alt={brand.title} width={150} height={150} key={index} />
                    )
                  })}
                </Slider>
              </Styled.Logos>
            }
          </>
        )
      })}      
    </>
  )
}

export default ClubPerks
