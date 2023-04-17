import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect } from 'react'

import Newsletter from '@components/Newsletter'
import type { NewsletterProps } from '@components/Newsletter/Newsletter.types'
import PageLayout from '@components/PageLayout'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import SplitPageTemplate from '@components/SplitPageTemplate'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import featuredImageUrl from '@helpers/featuredImageUrl'

import client from '@lib/apollo-client'


import { footerNavQuery } from '@queries/global/footer-nav'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import type { PageData } from '@typings/PageData.types'

interface NewsletterPageProps extends PageData {
  newsletter: {
    title: string
    description: string
  }
  newsletterForm: NewsletterProps['form']
}

const NewsletterPage: FC<NewsletterPageProps> = ({
  headerNav,
  footerNav,
  newsletter,
  newsletterForm,
  siteOptions,
}: NewsletterPageProps): ReactElement => {
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
      <SplitPageTemplate image={featuredImageUrl(siteOptions.gjOptions.splitPageImages.newsletterPage.fullSize)} title={newsletter.title}>
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
      siteOptions: siteOptions.data,
      newsletter: siteOptions.data.gjOptions.newsletterModal.modalNewsletter,
      newsletterForm: siteOptions.data.gfForm,
    },
  }
}
