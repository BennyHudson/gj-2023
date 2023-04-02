import React, { FC, ReactElement, useEffect, useContext } from 'react'
import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import { homepageQuery } from '@queries/homepage/homepage'
import { latestPostsQuery } from '@queries/homepage/latest-posts'
import { sessionsFeatureQuery } from '@queries/homepage/sessions-feature'
import { latestPodcastsQuery } from '@queries/homepage/latest-podcasts'
import { giftGuideQuery } from '@queries/homepage/gift-guide'
import { latestVideoQuery } from '@queries/homepage/latest-video'
import { articleCategoryQuery } from '@queries/homepage/category'

import FullPageFeature from '@components/FullPageFeature'
import PostCarousel from '@components/PostCarousel'
import Section from '@components/Section'
import Title from '@components/Title'
import PostGrid from '@components/PostGrid'
import BannerAdvert from '@components/BannerAdvert'
import GiftGuideFeature from '@components/GiftGuideFeature'
import WeeklyHighlight from '@components/WeeklyHighlight'
import SessionsFeature from '@components/SessionsFeature'
import PodcastGrid from '@components/PodcastGrid'
import FeatureCarousel from '@components/FeatureCarousel'

import PageContext, { PageContextProps } from '@context/PageContext'
import PageLayout from '@components/PageLayout'
import { siteOptionsQuery } from '@queries/global/site-options'
import NewsletterBanner from '@components/NewsletterBanner'
import { featuredProductsQuery } from '@queries/homepage/featured-products'
import ShopGrid from '@components/ShopGrid'
import ClubBanner from '@components/ClubBanner'
import { clubQuery } from '@queries/homepage/club'

const Home: FC = ({
  headerNav,
  footerNav,
  siteOptions, 
  pageData,
  latestPosts,
  coverInterviews,
  sessionsFeature,
  giftGuide,
  latestPodcasts,
  latestVideo,
  competitions,
  newsletterForm,
  featuredProducts,
  club,
}): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerStyle='feature' headerNav={headerNav} footerNav={footerNav} seo={pageData.seo} siteOptions={siteOptions} databaseId={pageData.databaseId}>
      <FullPageFeature
        {...pageData.homeFeaturedPost.homeFeaturedPost}
        excerpt={pageData.homeFeaturedPost.homeFeaturedPost.articleAcf.standfirst}
      />
      <PostCarousel />
      <NewsletterBanner backgroundImage={siteOptions.gjOptions.newsletterModal.sectionNewsletter.image.sourceUrl} form={newsletterForm} size={1} />
      <Section>
        <Title
          title='The Latest'
          subtitle='Keep up to date with our style guides, long reads and interviews'
          links={[
            {
              text: 'View All',
              url: '/latest',
            },
          ]}
        />
        <PostGrid priority={false} columns={3} posts={latestPosts} smCarousel />
      </Section>
      <BannerAdvert parent='gj_970x250' slot='GJ_970x250_001' />
      <Section>
        <Title
          title={coverInterviews.category.name}
          subtitle={coverInterviews.category.description}
          links={[
            {
              text: 'View All',
              url: coverInterviews.category.uri,
            },
          ]}
        />
        <PostGrid priority={false} columns={4} posts={coverInterviews.articles.nodes} smCarousel />
      </Section>
      <ClubBanner content={club.description} card={club.card.sourceUrl} />
      <Section appearance='tertiary'>
        <Title
          title='Shop'
          links={[
            {
              text: 'Visit Shop',
              url: 'https://shop.thegentlemansjournal.com',
            },
          ]}
        />
        <ShopGrid products={featuredProducts} />
      </Section>
      <GiftGuideFeature
        meta='Gift Guide'
        // eslint-disable-next-line quotes
        title={`Introducing the Gentleman's Journal Gift Guide`}
        subtitle='Perfect presents for everyone in your life as chosen by our experts'
        url='/gift-guide'
        featuredImage={giftGuide.featuredImage.node.sourceUrl}
      />
      <WeeklyHighlight
        excerpt={pageData.homeWeeklyHighlight.homeWeeklyHighlight.articleAcf.standfirst}
        {...pageData.homeWeeklyHighlight.homeWeeklyHighlight}
      />
      <SessionsFeature content={sessionsFeature.page.sessions.sessions.sessionsIntroText} post={sessionsFeature.articles.nodes[0]} />
      <Section>
        <Title
          title='Podcasts'
          links={[
            {
              text: 'View All',
              url: '/podcasts',
            },
          ]}
        />
        <PodcastGrid podcasts={latestPodcasts.podcasts.nodes} />
      </Section>
      <FeatureCarousel
        posts={latestVideo.map((video) => {
          return {
            title: video.title,
            date: video.date,
            uri: video.uri,
            subtitle: video.articleAcf.standfirst,
            categories: video.categories,
            featuredImage: video.featuredImage,
          }
        })}
        title='Video'
        links={[
          {
            text: 'View All',
            url: '/category/video/',
          },
        ]}
        cta='Watch Now'
        priority={false}
      />
      <BannerAdvert parent='gj_970x250' slot='GJ_970x250_002' />
      <Section>
        <Title title={'Editor\'s Pick'} />
        <PostGrid priority={false} posts={pageData.homeEditorsPick.homeEditorsPick} smCarousel />
      </Section>
      <Section>
        <Title
          title={competitions.category.name}
          subtitle={competitions.category.description}
          links={[
            {
              text: 'View All',
              url: competitions.category.uri,
            },
          ]}
        />
        <PostGrid priority={false} columns={4} posts={competitions.articles.nodes} smCarousel />
      </Section>
      <NewsletterBanner backgroundImage={siteOptions.gjOptions.newsletterModal.sectionNewsletter.imageAlt.sourceUrl} form={newsletterForm} size={2} />
    </PageLayout>
  )
}

export default Home

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)

  const homepage = await client.query(homepageQuery)
  const latestPosts = await client.query(latestPostsQuery(homepage.data.page.homeFeaturedPost.homeFeaturedPost.id))
  const coverInterviews = await client.query(articleCategoryQuery('Cover Interviews'))
  const sessionFeature = await client.query(sessionsFeatureQuery)
  const giftGuide = await client.query(giftGuideQuery)
  const latestPodcasts = await client.query(latestPodcastsQuery)
  const latestVideo = await client.query(latestVideoQuery)
  const competitions = await client.query(articleCategoryQuery('Competitions'))
  const newsletter = await client.query(siteOptionsQuery)
  const featuredProducts = await client.query(featuredProductsQuery)
  const club = await client.query(clubQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      pageData: homepage.data.page,
      latestPosts: latestPosts.data.articles.nodes,
      coverInterviews: coverInterviews.data,
      sessionsFeature: sessionFeature.data,
      giftGuide: giftGuide.data.page.pageGifting.ctaFirst,
      latestPodcasts: latestPodcasts.data,
      latestVideo: latestVideo.data.articles.nodes,
      competitions: competitions.data,
      newsletterForm: newsletter.data.gfForm,
      featuredProducts: featuredProducts.data.clubhousePartnersOptions.store.store.brands,
      club: club.data.page.subscriptionPage.club,
    },
    // revalidate: 60,
  }
}
