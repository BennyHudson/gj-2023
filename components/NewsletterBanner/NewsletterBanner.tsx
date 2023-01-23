import React, { ReactElement, FC, useContext } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import Newsletter from '@components/Newsletter'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/NewsletterBanner.style'

const NewsletterBanner: FC = ({ form, backgroundImage, size = 1 }): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
  return (
    <Styled.NewsletterBanner size={size} headerHeight={headerHeight}>
      <Styled.NewsletterBannerContent size={size}>
        <Newsletter form={form} />
        {size === 1 && <Image src={featuredImageUrl(backgroundImage)} fill alt='' />}
      </Styled.NewsletterBannerContent>
      {size === 2 && (
        <Styled.BackgroundImage>
          <Image src={featuredImageUrl(backgroundImage)} fill alt='' />
        </Styled.BackgroundImage>
      )}
    </Styled.NewsletterBanner>
  )
}

export default NewsletterBanner
