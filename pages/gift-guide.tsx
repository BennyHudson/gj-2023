import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { giftGuideContentQuery } from '@queries/pages/gift-guide'

import GiftGuideFeature from '@components/GiftGuideFeature'
import Section from '@components/Section'
import VerticalSpacer from '@components/VerticalSpacer'
import PostGrid from '@components/PostGrid'
import Title from '@components/Title'
import BrandGrid from '@components/BrandGrid'
import GiftGrid from '@components/GiftGrid'
import BannerAdvert from '@components/BannerAdvert'
import Feed from '@components/Feed'
import PageLayout from '@components/PageLayout'

import PageContext, { PageContextProps } from '@context/PageContext'
import { useBreakpoints } from '@hooks/useBreakpoints'
import { siteOptionsQuery } from '@queries/global/site-options'

const GiftGuidePage: FC = ({ pageData, seo, headerNav, footerNav, siteOptions, databaseId }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  const { mdAndBelow } = useBreakpoints()

  useEffect(() => {
    setActiveNavElement(2)
  }, [setActiveNavElement])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={seo} siteOptions={siteOptions} databaseId={databaseId}>
      <GiftGuideFeature
        height={2}
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
          posts={[pageData.featuredGuides[1], pageData.featuredGuides[2], pageData.featuredGuides[3], pageData.featuredGuides[4]]}
          smCarousel
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
        <PostGrid posts={pageData.featureGuidesMore} columns={3} smCarousel />
        <Title title={pageData.selectedProducts.title} />
        <GiftGrid gifts={pageData.selectedProducts.gifts} />
      </Section>
      <BannerAdvert parent='gj_970x250' slot='GJ_970x250_001' />
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
        <Feed category={2646} count={mdAndBelow ? 12 : 20} showAdvert={false} />
      </Section>
    </PageLayout>
  )
}

export default GiftGuidePage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const giftsPage = await client.query(giftGuideContentQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      databaseId: giftsPage.data.page.databaseId,
      pageData: giftsPage.data.page.pageGifting,
      seo: giftsPage.data.page.seo,
    },
  }
}
