import React, { FC, ReactElement } from 'react'

import client from '@lib/apollo-client'
import { getAllProducts } from '@lib/api'
import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'

import { StaticPaths } from '@typings/StaticPaths.types'
import PageLayout from '@components/PageLayout'
import { magazineQuery } from '@queries/products/external-product'
import ProductFeature from '@components/ProductFeature'
import { magazineCategoryQuery } from '@queries/products/magazine-category'
import Section from '@components/Section'
import Title from '@components/Title'
import MagazineGrid from '@components/MagazineGrid'

const ProductPage: FC = ({ headerNav, footerNav, product, magazines }): ReactElement => {
  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav} seo={product.seo}>
      <ProductFeature product={product} />
      <Section>
        <Title 
          title='Other Magazines'
          links={[
            {
              text: 'View All',
              url: '/product-category/magazine',
            },
          ]}
        />
        <MagazineGrid magazines={magazines} />
      </Section>
    </PageLayout>
  )
}

export default ProductPage

export async function getStaticPaths() {
  const allProducts = await getAllProducts()

  const paths = allProducts.map((product) => {
    if (!product) return
    if (!product.node) return
    return {
      params: {
        slug: [product.node.slug],
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
  const product = await client.query(magazineQuery(slug))
  const magazines = await client.query(magazineCategoryQuery(10))

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      product: product.data.externalProduct,
      magazines: magazines.data.productCategory.products.edges,
      // data: article.data,
    },
    // revalidate: 60,
  }
}