import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { siteOptionsQuery } from '@queries/global/site-options'

import PageLayout from '@components/PageLayout'
import SplitPageTemplate from '@components/SplitPageTemplate'

import PageContext, { PageContextProps } from '@context/PageContext'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Newsletter from '@components/Newsletter'
import featuredImageUrl from '@helpers/featuredImageUrl'

const NewsletterPage: FC = ({ headerNav, footerNav, newsletter, newsletterForm, siteOptions }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout
      headerStyle='standard'
      headerNav={headerNav}
      footerNav={footerNav}
      seo={{ title: `${newsletter.title} | The Gentleman's Journal` }}
      siteOptions={siteOptions}
    >
      <SplitPageTemplate image={featuredImageUrl(siteOptions.splitPageImages.newsletterPage.sourceUrl)} title={newsletter.title}>
        <RawHtmlWrapper content={newsletter.description} />
        <Newsletter form={newsletterForm} showTitle={false} />
      </SplitPageTemplate>
    </PageLayout>
  )
}

export default NewsletterPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const siteOptions = await client.query(siteOptionsQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      siteOptions: siteOptions.data.gjOptions,
      newsletter: siteOptions.data.gjOptions.newsletterModal.modalNewsletter,
      newsletterForm: siteOptions.data.gfForm,
    },
  }
}
