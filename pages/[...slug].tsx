import type { FC, ReactElement } from 'react'
import { useContext, useEffect } from 'react'

import BannerAdvert from '@components/BannerAdvert'
import ContentGrid from '@components/ContentGrid'
import FurtherReading from '@components/FurtherReading'
import HeroImage from '@components/HeroImage'
import Masthead from '@components/Masthead'
import PageLayout from '@components/PageLayout'
import Section from '@components/Section'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import { getAllPosts } from '@lib/api'
import client from '@lib/apollo-client'


import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import type { PostBody } from '@queries/post/post-body'
import { postBody } from '@queries/post/post-body'
import type { PageData } from '@typings/PageData.types'
import type { StaticPaths } from '@typings/StaticPaths.types'

interface PostData extends PageData {
  data: PostBody
}

const Post: FC<PostData> = ({ data, headerNav, footerNav, siteOptions }: PostData): ReactElement => {
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
    <PageLayout
      headerNav={headerNav}
      footerNav={footerNav}
      seo={articleData.seo}
      siteOptions={siteOptions}
      databaseId={articleData.databaseId}
    >
      {articleData.featuredImage && <HeroImage featuredImage={articleData.featuredImage.node.fullSize} />}
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
            membersOnly: !!(articleData.categories && articleData.categories.nodes.find((category) => category.name === 'Members')),
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

export async function getStaticProps({ preview = false, params }: StaticPaths) {
  const { slug } = params

  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)
  const article = await client.query(postBody(slug[0], preview))

  if (!article.data.post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data,
      data: article.data,
    },
    revalidate: 60,
  }
}
