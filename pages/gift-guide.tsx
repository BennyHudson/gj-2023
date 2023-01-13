import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { giftGuideContentQuery } from '@queries/giftGuide/giftGuide-content'

import GiftGuideFeature from '@components/imagery/GiftGuideFeature'
import Section from '@components/layout/Section'
import VerticalSpacer from '@components/layout/VerticalSpacer'
import PostGrid from '@components/grids/PostGrid'
import Title from '@components/typography/Title'
import BrandGrid from '@components/grids/BrandGrid'
import GiftGrid from '@components/grids/GiftGrid'
import BannerAdvert from '@components/layout/BannerAdvert'

import PageContext, { PageContextProps } from '@context/PageContext'
import Feed from '@components/grids/Feed'
import HeadTags from '@components/layout/HeadTags'
import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import PageLayout from '@components/layout/PageLayout'

const GiftGuidePage: FC = ({ pageData, seo, headerNav, footerNav }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(2)
  }, [setActiveNavElement])
  
  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav}>
      <HeadTags seo={seo} />
      <GiftGuideFeature
        height={3}
        meta={pageData.ctaFirst.categories.nodes[0].name}
        title={pageData.ctaFirst.title}
        subtitle={pageData.ctaFirst.articleAcf.standfirst}
        url={pageData.ctaFirst.uri}
        featuredImage={pageData.ctaFirst.featuredImage.node.sourceUrl}
      />
      <Section>
        <GiftGuideFeature
          meta={pageData.featuredGuides[0].categories.nodes[0].name}
          title={pageData.featuredGuides[0].title}
          subtitle={pageData.featuredGuides[0].articleAcf.standfirst}
          url={pageData.featuredGuides[0].uri}
          featuredImage={pageData.featuredGuides[0].featuredImage.node.sourceUrl}
          height={1}
        />
        <VerticalSpacer spacingLevel={4} />
        <PostGrid
          posts={[
            pageData.featuredGuides[1],
            pageData.featuredGuides[2],
            pageData.featuredGuides[3],
            pageData.featuredGuides[4],
          ]}
        />
      </Section>
      <GiftGuideFeature
        meta={pageData.ctaSecond.categories.nodes[0].name}
        title={pageData.ctaSecond.title}
        subtitle={pageData.ctaSecond.articleAcf.standfirst}
        url={pageData.ctaSecond.uri}
        featuredImage={pageData.ctaSecond.featuredImage.node.sourceUrl}
      />
      <Section>
        <Title title={pageData.featuredBrandsTitle} />
        <BrandGrid brands={pageData.featuredBrands} />
        <Title title='More Guides' />
        <PostGrid posts={pageData.featureGuidesMore} columns={3} />
        <Title title={pageData.selectedProducts.title} />
        <GiftGrid gifts={pageData.selectedProducts.gifts} />
      </Section>
      <BannerAdvert />
      <GiftGuideFeature
        meta={pageData.ctaThird.categories.nodes[0].name}
        title={pageData.ctaThird.title}
        subtitle={pageData.ctaThird.articleAcf.standfirst}
        url={pageData.ctaThird.uri}
        featuredImage={pageData.ctaThird.featuredImage.node.sourceUrl}
      />
      <Section>
        <Title title={pageData.selectedProductsSecond.title} />
        <GiftGrid gifts={pageData.selectedProductsSecond.gifts} />
      </Section>
      <Section appearance='tertiary'>
        <Title title='All Guides' />
        <Feed category='Gift Guide' />
      </Section>
    </PageLayout>
  )
}

export default GiftGuidePage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const giftsPage = await client.query(giftGuideContentQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      pageData: giftsPage.data.page.pageGifting,
      seo: giftsPage.data.page.seo,
    }
  }
}