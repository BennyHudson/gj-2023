import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { newsletterModalQuery } from '@queries/global/site-options'

import PageLayout from '@components/layout/PageLayout'
import SplitPageTemplate from '@components/layout/SplitPageTemplate'

import PageContext, { PageContextProps } from '@context/PageContext'
import RawHtmlWrapper from '@components/typography/RawHtmlWrapper'
import Newsletter from '@components/newsletter/Newsletter'

const NewsletterPage: FC = ({ headerNav, footerNav, newsletter, newsletterForm }): ReactElement => {
  const { token, setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])
  
  return (
    <PageLayout headerNav={headerNav} footerNav={footerNav}>
      <SplitPageTemplate image={newsletter.image.sourceUrl} title={newsletter.title}>
        <RawHtmlWrapper content={newsletter.description} />
        <Newsletter form={newsletterForm} />
      </SplitPageTemplate>
    </PageLayout>
  )
}

export default NewsletterPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const newsletter = await client.query(newsletterModalQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      newsletter: newsletter.data.gjOptions.newsletterModal.modalNewsletter,
      newsletterForm: newsletter.data.gfForm,
    }
  }
}