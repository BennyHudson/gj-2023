import { FC, ReactElement, useContext, useEffect } from 'react'
import { gql } from '@apollo/client'
// import { useRouter } from 'next/router'

import client from '@lib/apollo-client'

import { getAllPosts } from '@lib/api'

import { articleBody } from '@queries/article/article-body'

import HeroImage from '@components/HeroImage'
import BannerAdvert from '@components/BannerAdvert'
import Masthead from '@components/Masthead'
import Section from '@components/Section'
import ContentGrid from '@components/ContentGrid'
import FurtherReading from '@components/FurtherReading'

import PageContext, { PageContextProps } from '@context/PageContext'

const Article: FC = ({ data }): ReactElement => {
  const articleData = data.article
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

    setActiveNavElement(1)
  }, [setActiveNavElement, articleData])

  const homeLink = {
    title: 'Home',
    url: '/',
  }

  let categoryCrumbs = []
  if (articleData.categories) {
    categoryCrumbs = articleData.categories.nodes.map((category) => {
      return {
        title: category.name,
        url: category.uri,
      }
    })
  }

  const currentPage = {
    title: articleData!.title,
    url: articleData!.uri,
  }
  
  const breadcrumbs = [homeLink, ...categoryCrumbs, currentPage]

  return (
    <>
      {articleData.featuredImage && <HeroImage featuredImage={articleData.featuredImage.node.sourceUrl} />}
      <BannerAdvert />
      <Section>
        <Masthead
          title={articleData.title}
          breadcrumbs={breadcrumbs}
          subtitle={articleData.articleAcf?.standfirst}
        />
        <ContentGrid
          byline={{
            author: articleData.author?.node.name,
            photographer: articleData.byLineAdditional?.photographerName,
            additionalBylines: articleData.byLineAdditional?.otherByLines,
            sponsoredPost: {
              logo: articleData.sponsoredPost?.sponsorLogo?.sourceUrl,
              name: articleData.sponsoredPost?.sponsorName,
              url: articleData.sponsoredPost?.sponsorUrl,
              disableLink: articleData.sponsoredPost?.sponsorDisableLink,
            },
          }}
          contentBuilder={articleData.articleAcf.contentBuilder}
          contentBuilderPrefix='Article_Articleacf_ContentBuilder'
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
    </>
  )
}

export default Article

export async function getStaticPaths() {
  const allArticles = await getAllPosts('article')
  // const allPosts = await getAllPosts('post')

  // const all = [...allArticles, ...allPosts]

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

export async function getStaticProps({ params }) {
  const { slug } = params
  const response = await client.query(articleBody(slug))

  return {
    props: {
      data: response.data,
    }
  }
}