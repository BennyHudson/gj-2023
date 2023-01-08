import React, { FC, ReactElement, useEffect, useContext } from 'react'
import { gql } from '@apollo/client'
import he from 'he'

import client from '@lib/apollo-client'

import BannerAdvert from '@components/BannerAdvert'
import Section from '@components/Section'
import Breadcrumbs from '@components/Breadcrumbs'
import Title from '@components/Title'
import Feed from '@components/Feed'

import PageContext, { PageContextProps } from '@context/PageContext'

const Category: FC =  ({ data }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    if (data.category.name === 'Video') {
      setActiveNavElement(4)
    } else {
      setActiveNavElement(1)
    }
  }, [setActiveNavElement, data.category.name])
  
  const childCategories = () => {
    if (data.category.children.nodes.length) {
      return data.category.children.nodes.map((category) => {
        return {
          text: category.name,
          url: category.uri,
        }
      })
    }
  }

  return (
    <>
      <BannerAdvert />
      <Section>
        <Breadcrumbs links={data.category.seo.breadcrumbs} />
        <Title title={data.category.name} subtitle={data.category.description} links={childCategories()} />
        <Feed category={data.category.name} />
      </Section>
    </>
  )
}

export default Category

export async function getStaticPaths() {
  const getAllCategories = await client.query({
    query: gql`
      query allCats {
        categories(first: 10000) {
          nodes {
            name
            slug
            uri
          }
        }
      }
    `
  })

  if (!getAllCategories.data) return

  const allCategories = getAllCategories.data.categories.nodes

  const paths = allCategories.map((category) => {
    const trimmedPath = category.uri.replace('/category/', '')
    // console.log(category.slug)
    if (!category.slug) { console.log(category.name) }
    return {
      params: {
        slug: trimmedPath.split('/'),
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
  const response = await client.query({
    query: gql`
      query categoryQuery {
        category(id: "${slug[slug.length - 1]}", idType: SLUG) {
          name
          description
          uri
          taxonomyName
          slug
          seo {
            breadcrumbs {
              text
              url
            }
            canonical
            cornerstone
            focuskw
            metaDesc
            metaKeywords
            metaRobotsNofollow
            metaRobotsNoindex
            opengraphAuthor
            opengraphDescription
            opengraphImage {
              sourceUrl
            }
            opengraphModifiedTime
            opengraphPublishedTime
            opengraphPublisher
            opengraphSiteName
            opengraphTitle
            opengraphType
            opengraphUrl
            readingTime
            schema {
              articleType
              pageType
            }
            title
            twitterDescription
            twitterImage {
              sourceUrl
            }
            twitterTitle
          }
          children {
            nodes {
              name
              uri
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      data: response.data,
    }
  }
}