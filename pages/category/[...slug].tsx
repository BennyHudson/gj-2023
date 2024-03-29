import { gql } from '@apollo/client'
import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import BannerAdvert from '@components/BannerAdvert'
import Breadcrumbs from '@components/Breadcrumbs'
import Feed from '@components/Feed'
import PageLayout from '@components/PageLayout'
import Section from '@components/Section'
import Title from '@components/Title'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import { useBreakpoints } from '@hooks/useBreakpoints'

import client from '@lib/apollo-client'


import type { CategoryBody } from '@queries/category/category-body'
import { categoryBodyQuery } from '@queries/category/category-body'
import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import type { PageData } from '@typings/PageData.types'
import type { StaticPaths } from '@typings/StaticPaths.types'

interface CategoryData extends PageData {
  category: CategoryBody
}

const Category: FC<CategoryData> = ({ category, headerNav, footerNav, siteOptions }: CategoryData): ReactElement => {
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

  return (
    <PageLayout
      headerNav={headerNav}
      headerStyle='standard'
      footerNav={footerNav}
      seo={{ title: `${category.name} | The Gentleman's Journal` }}
      siteOptions={siteOptions}
    >
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
        categories(first: 1) {
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
  const siteOptions = await client.query(siteOptionsQuery)
  const category = await client.query(categoryBodyQuery(slug[slug.length - 1]))

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      category: category.data.category,
      siteOptions: siteOptions.data,
    },
    revalidate: 60,
  }
}
