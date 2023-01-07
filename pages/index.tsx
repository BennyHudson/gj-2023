import React, { FC, ReactElement, useEffect, useContext } from 'react'
import client from '@lib/apollo-client'

import { homepageQuery } from '@queries/homepage/homepage'
import { latestPostsQuery } from '@queries/homepage/latest-posts'
import { sessionsFeatureQuery } from '@queries/homepage/sessions-feature'
import { latestPodcastsQuery } from '@queries/homepage/latest-podcasts'
import { giftGuideQuery } from '@queries/homepage/gift-guide'
import { latestVideoQuery } from '@queries/homepage/latest-video'
import { categoryQuery } from '@queries/homepage/category'

import FullPageFeature from '@components/FullPageFeature'
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

const Home: FC = ({ 
  pageData, 
  latestPosts, 
  coverInterviews, 
  sessionsFeature,
  giftGuide,
  latestPodcasts,
  latestVideo,
  competitions,
}): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <>
      <FullPageFeature
        {...pageData.homeFeaturedPost.homeFeaturedPost}
        excerpt={pageData.homeFeaturedPost.homeFeaturedPost.articleAcf.standfirst}
      />
      <Section>
        <Title
          title='The Latest'
          subtitle='Keep up to date with our style guides, long reads and interviews'
          links={[
            {
              text: 'View All',
              url: '/latest',
            }
          ]}
        />
        <PostGrid
          columns={3}
          posts={latestPosts}
        />
      </Section>
      <BannerAdvert />
      <Section>
        <Title
          title={coverInterviews.category.name}
          subtitle={coverInterviews.category.description}
          links={[
            {
              text: 'View All',
              url: coverInterviews.category.uri,
            }
          ]}
        />
        <PostGrid
          columns={4}
          posts={coverInterviews.articles.nodes}
        />
      </Section>
      <GiftGuideFeature
        meta='Gift Guide'
        // eslint-disable-next-line quotes
        title={`Introducing the Gentleman's Journal Gift Guide`}
        subtitle='Perfect presents for everyone in your life as chosen by our experts'
        url='/gift-guide'
        featuredImage={giftGuide.featuredImage.node.sourceUrl}
      />
      <Section>
        <Title
          title='Weekly Highlight'
        />
        <WeeklyHighlight
          excerpt={pageData.homeWeeklyHighlight.homeWeeklyHighlight.articleAcf.standfirst}
          {...pageData.homeWeeklyHighlight.homeWeeklyHighlight}
        />
      </Section>
      <SessionsFeature
        content={sessionsFeature.page.sessions.sessions.sessionsIntroText}
        post={sessionsFeature.articles.nodes[0]}
      />
      <Section>
        <Title title='Podcasts' links={[
          {
            text: 'View All',
            url: '/podcasts',
          }
        ]} />
        <PodcastGrid
          podcasts={latestPodcasts.podcasts.nodes}
        />
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
          }
        ]}
        cta='Watch Now'
      />
      <BannerAdvert />
      <Section>
        <Title title={'Editor\'s Pick'} />
        <PostGrid posts={pageData.homeEditorsPick.homeEditorsPick} />
      </Section>
      <Section>
        <Title
          title={competitions.category.name}
          subtitle={competitions.category.description}
          links={[
            {
              text: 'View All',
              url: competitions.category.uri,
            }
          ]}
        />
        <PostGrid
          columns={4}
          posts={competitions.articles.nodes}
        />
      </Section>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const homepage = await client.query(homepageQuery)
  const latestPosts = await client.query(latestPostsQuery)
  const coverInterviews = await client.query(categoryQuery('Cover Interviews'))
  const sessionFeature = await client.query(sessionsFeatureQuery)
  const giftGuide = await client.query(giftGuideQuery)
  const latestPodcasts = await client.query(latestPodcastsQuery)
  const latestVideo = await client.query(latestVideoQuery)
  const competitions = await client.query(categoryQuery('Competitions'))

  return {
    props: {
      pageData: homepage.data.page,
      latestPosts: latestPosts.data.articles.nodes,
      coverInterviews: coverInterviews.data,
      sessionsFeature: sessionFeature.data,
      giftGuide: giftGuide.data.page.pageGifting.ctaFirst,
      latestPodcasts: latestPodcasts.data,
      latestVideo: latestVideo.data.articles.nodes,
      competitions: competitions.data,
    }
  }
}
