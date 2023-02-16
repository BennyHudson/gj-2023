import { FC, ReactElement, useContext, useEffect } from 'react'

import client from '@lib/apollo-client'

import { getAllPosts } from '@lib/api'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { postBody, PostBody } from '@queries/post/post-body'

import HeroImage from '@components/HeroImage'
import BannerAdvert from '@components/BannerAdvert'
import Masthead from '@components/Masthead'
import Section from '@components/Section'
import ContentGrid from '@components/ContentGrid'
import FurtherReading from '@components/FurtherReading'

import PageContext, { PageContextProps } from '@context/PageContext'
import PageLayout from '@components/PageLayout'
import { StaticPaths } from '@typings/StaticPaths.types'
import { PageData } from '@typings/PageData.types'

interface PostData extends PageData {
  data: PostBody
}

const Post: FC<PostData> = ({ data, headerNav, footerNav }: PostData): ReactElement => {
  const articleData = data.post
  const { articleNote } = data.gjOptions
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    if (!articleData.categories) {
      setActiveNavElement(1)
      return
    }

    if (articleData.categories.nodes.find((category) => category.name === 'Video')) {
      setActiveNavElement(4)
      return
    }

    if (articleData.categories.nodes.find((category) => category.name === 'GJ Sessions')) {
      setActiveNavElement(7)
      return
    }

    setActiveNavElement(1)
  }, [setActiveNavElement, articleData])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={articleData.seo}>
      {articleData.featuredImage && <HeroImage featuredImage={articleData.featuredImage.node.sourceUrl} />}
      <BannerAdvert parent='gj_970x250' slot='GJ_970x250_001' />
      <Section>
        <Masthead title={articleData.title} breadcrumbs={articleData.seo.breadcrumbs} subtitle={articleData.articleAcf.standfirst} />
        <ContentGrid
          byline={{
            author: articleData.author?.node.name,
            photographer: articleData.byLineAdditional?.photographerName,
            additionalBylines: articleData.byLineAdditional?.otherByLines,
            sponsoredPost: articleData.sponsoredPost,
          }}
          contentBuilder={{
            content: articleData.articleAcf.contentBuilder,
            membersOnly: articleData.categories && articleData.categories.nodes.find((category) => category.name === 'Members')
          }}
          contentBuilderPrefix='Post_Articleacf_ContentBuilder'
          articleNote={articleNote}
          content={articleData.content}
        />
        {articleData.categories?.nodes.length && (
          <>
            <FurtherReading
              articleId={articleData.id}
              category={articleData.categories.nodes[articleData.categories.nodes.length - 1].name}
            />
          </>
        )}
      </Section>
    </PageLayout>
  )
}

export default Post

export async function getStaticPaths() {
  const allPosts = await getAllPosts('post')

  const paths = allPosts.map((article) => {
    if (!article) return
    if (!article.node) return
    return {
      params: {
        slug: [article.node.slug],
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: StaticPaths) {
  const { slug } = params

  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const article = await client.query(postBody(slug))

  if (!article.data.post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      data: article.data,
    },
    // revalidate: 60,
  }
}
