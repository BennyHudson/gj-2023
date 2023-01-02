import { useRouter } from "next/router"
import { gql } from '@apollo/client'

import client from '../../apollo-client'

export default function Category ({ data }) {
  console.log(data)
  return (
    <>
      {data.category.name}
    </>
  )
}

export async function getStaticPaths() {
  const getAllCategories = await client.query({
    query: gql`
      query allCats {
        categories(first: 10000) {
          nodes {
            slug
            uri
          }
        }
      }
    `
  })

  const allCategories = getAllCategories.data.categories.nodes

  if (!allCategories) return 

  const paths = allCategories.map((category) => ({
    params: {
      slug: [category.slug],
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const response = await client.query({
    query: gql`
      query categoryQuery {
        category(id: "${slug}", idType: SLUG) {
          name
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