import { gql } from '@apollo/client'

import client from '../../apollo-client'

export default function Article ({ data }) {
  return (
    <>
      {data.article.title}
    </>
  )
}

export async function getStaticPaths() {
  const getAllArticles = await client.query({
    query: gql`
      query allArticles {
        articles(first: 1500) {
          nodes {
            slug
            uri
          }
        }
      }
    `
  })

  const allArticles = getAllArticles.data.articles.nodes

  if (!allArticles) return 

  const paths = allArticles.map((article) => {
    if (!article.slug) return
    return {
      params: {
        slug: [article.slug],
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const response = await client.query({
    query: gql`
      query articleQuery {
        article(id: "${slug}", idType: SLUG) {
          title
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