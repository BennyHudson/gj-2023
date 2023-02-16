import React, { FC, ReactElement, useEffect, useContext } from 'react'
import { gql } from '@apollo/client'

import client from '@lib/apollo-client'

import BannerAdvert from '@components/BannerAdvert'
import Section from '@components/Section'
import Breadcrumbs from '@components/Breadcrumbs'
import Title from '@components/Title'
import Feed from '@components/Feed'

import PageContext, { PageContextProps } from '@context/PageContext'
import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import PageLayout from '@components/PageLayout'
import { CategoryBody, categoryBodyQuery } from '@queries/category/category-body'
import { StaticPaths } from '@typings/StaticPaths.types'
import { PageData } from '@typings/PageData.types'
import { useBreakpoints } from '@hooks/useBreakpoints'

interface CategoryData extends PageData {
  category: CategoryBody
}

const Category: FC<CategoryData> = ({ category, headerNav, footerNav }: CategoryData): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  const { mdAndBelow } = useBreakpoints()

  useEffect(() => {
    if (category.name === 'Video') {
      setActiveNavElement(4)
    } else {
      setActiveNavElement(1)
    }
  }, [setActiveNavElement, category.name])

  const childCategories = () => {
    if (category.children.nodes.length) {
      return category.children.nodes.map((category) => {
        return {
          text: category.name,
          url: category.uri,
        }
      })
    }
  }

  console.log(category)

  return (
    <PageLayout headerNav={headerNav} headerStyle='standard' footerNav={footerNav} seo={{ title: `${category.name} | The Gentleman's Journal` }}>
      <BannerAdvert parent='gj_970x250' slot='GJ_970x250_001' />
      <Section>
        <Breadcrumbs links={category.seo.breadcrumbs!} />
        <Title title={category.name} subtitle={category.description} links={childCategories()} />
        <Feed category={category.databaseId} count={mdAndBelow ? 12 : 18} />
      </Section>
    </PageLayout>
  )
}

export default Category

export async function getStaticPaths() {
  const getAllCategories = await client.query({
    query: gql`
      query allCats {
        categories(first: 10000) {
          nodes {
            uri
          }
        }
      }
    `,
  })

  if (!getAllCategories.data) return

  const allCategories = getAllCategories.data.categories.nodes

  const paths = allCategories.map((category: { uri: string }) => {
    const trimmedPath = category.uri.replace('/category/', '')
    return {
      params: {
        slug: trimmedPath.split('/'),
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
  const category = await client.query(categoryBodyQuery(slug[slug.length - 1]))

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      category: category.data.category,
    },
    // revalidate: 60
  }
}
