import { FC, ReactElement, useContext, useEffect } from 'react'

import client from '@lib/apollo-client'

import { getAllPosts } from '@lib/api'

import { headerNavQuery, HeaderNav } from '@queries/global/header-nav'
import { footerNavQuery, FooterNav } from '@queries/global/footer-nav'
import { articleBody, ArticleBody } from '@queries/article/article-body'

import HeroImage from '@components/imagery/HeroImage'
import BannerAdvert from '@components/layout/BannerAdvert'
import Masthead from '@components/layout/Masthead'
import Section from '@components/layout/Section'
import ContentGrid from '@components/grids/ContentGrid'
import FurtherReading from '@components/grids/FurtherReading'
import HeadTags from '@components/layout/HeadTags'

import PageContext, { PageContextProps } from '@context/PageContext'
import PageLayout from '@components/layout/PageLayout'
import { StaticPaths } from '@typings/StaticPaths.types'
import { PageData } from '@typings/PageData.types'

interface ArticleData extends PageData {
  data: ArticleBody
}

const Article: FC<ArticleData> = ({ data, headerNav, footerNav }: ArticleData): ReactElement => {
  const articleData = data.article
  const { articleNote } = data.gjOptions
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    if (!articleData.categories) {
      setActiveNavElement(1)
      return
    }

    if (articleData.categories.nodes.find(category => category.name === 'Video')) {
      setActiveNavElement(4)
      return
    }

    if (articleData.categories.nodes.find(category => category.name === 'GJ Sessions')) {
      setActiveNavElement(7)
      return
    }

    setActiveNavElement(1)
  }, [setActiveNavElement, articleData])

  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav}>
      <HeadTags seo={articleData.seo} />
      {articleData.featuredImage && <HeroImage featuredImage={articleData.featuredImage.node.sourceUrl} />}
      <BannerAdvert />
      <Section>
        <Masthead
          title={articleData.title}
          breadcrumbs={articleData.seo.breadcrumbs}
          subtitle={articleData.articleAcf.standfirst}
        />
        <ContentGrid
          byline={{
            author: articleData.author?.node.name,
            photographer: articleData.byLineAdditional?.photographerName,
            additionalBylines: articleData.byLineAdditional?.otherByLines,
            sponsoredPost: articleData.sponsoredPost,
          }}
          contentBuilder={articleData.articleAcf.contentBuilder}
          contentBuilderPrefix='Article_Articleacf_ContentBuilder'
          articleNote={articleNote}
        />
        {articleData.categories?.nodes.length &&
          <>
            <FurtherReading
              articleId={articleData.id}
              category={articleData.categories.nodes[articleData.categories.nodes.length - 1].name}
            />
          </>
        }
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
      }
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
  const article = await client.query(articleBody(slug))

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      data: article.data,
    }
  }
}