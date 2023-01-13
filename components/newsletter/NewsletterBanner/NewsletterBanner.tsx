import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import Newsletter from '@components/newsletter/Newsletter'

import * as Styled from './styles/NewsletterBanner.style'

const NewsletterBanner: FC = ({ form, backgroundImage }): ReactElement => {
  return (
    <Styled.NewsletterBanner>
      <Styled.NewsletterBannerContent>
        <Newsletter form={form} />
        <Image src={featuredImageUrl(backgroundImage)} fill alt='' />
      </Styled.NewsletterBannerContent>
    </Styled.NewsletterBanner>
  )
}

export default NewsletterBanner
