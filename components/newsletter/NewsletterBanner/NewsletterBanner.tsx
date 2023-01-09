import React, { ReactElement, FC } from 'react'

import useFeaturedImage from '@hooks/useFeaturedImage'

import Newsletter from '@components/newsletter/Newsletter'

import * as Styled from './styles/NewsletterBanner.style'

const NewsletterBanner: FC = (): ReactElement => {
  return (
    <Styled.NewsletterBanner>
      <Styled.NewsletterBannerContent backgroundImage={useFeaturedImage(394410).featuredImage}>
        <Newsletter />
      </Styled.NewsletterBannerContent>
    </Styled.NewsletterBanner>
  )
}

export default NewsletterBanner
