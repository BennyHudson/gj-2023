import { FC, ReactElement, useContext, useEffect } from 'react'

import client from '@lib/apollo-client'

import { getAllPosts } from '@lib/api'

import { StaticPaths } from '@typings/StaticPaths.types'
import { PageData } from '@typings/PageData.types'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { articleBody, ArticleBody } from '@queries/article/article-body'

import HeroImage from '@components/HeroImage'
import BannerAdvert from '@components/BannerAdvert'
import Masthead from '@components/Masthead'
import Section from '@components/Section'
import ContentGrid from '@components/ContentGrid'
import FurtherReading from '@components/FurtherReading'

import PageContext, { PageContextProps } from '@context/PageContext'
import PageLayout from '@components/PageLayout'
import { siteOptionsQuery } from '@queries/global/site-options'

interface ArticleData extends PageData {
  data: ArticleBody
}

const Article: FC<ArticleData> = ({ data, headerNav, footerNav, siteOptions }: ArticleData): ReactElement => {
  const articleData = data.article
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
    <PageLayout headerStyle={articleData.categories?.nodes.find((category) => category.name === 'Video') ? 'standard' : 'feature'} headerNav={headerNav} footerNav={footerNav} seo={articleData?.seo} siteOptions={siteOptions}>
      {articleData.featuredImage && (
        <HeroImage featuredImage={articleData.featuredImage.node.sourceUrl} featuredVideo={articleData.articleAcf.featuredVideo} />
      )}
      <BannerAdvert parent='GJ_728x90_001_0' paddingLevel={1} />
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
          contentBuilderPrefix='Article_Articleacf_ContentBuilder'
          articleNote={articleNote}
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

export default Article

export async function getStaticPaths() {
  const allArticles = await getAllPosts('article')

  const paths = allArticles.map((article) => {
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
  const article = await client.query(articleBody(slug, preview))

  if (!article.data.article) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      data: article.data,
      siteOptions: siteOptions.data,
    },
    // revalidate: 60,
  }
}
