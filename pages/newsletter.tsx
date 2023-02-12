import React, { FC, ReactElement, useEffect, useContext } from 'react'

import client from '@lib/apollo-client'

import { headerNavQuery } from '@queries/global/header-nav'
import { footerNavQuery } from '@queries/global/footer-nav'
import { newsletterModalQuery } from '@queries/global/site-options'

import PageLayout from '@components/PageLayout'
import SplitPageTemplate from '@components/SplitPageTemplate'

import PageContext, { PageContextProps } from '@context/PageContext'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Newsletter from '@components/Newsletter'

const NewsletterPage: FC = ({ headerNav, footerNav, newsletter, newsletterForm }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  return (
    <PageLayout headerStyle='standard' headerNav={headerNav} footerNav={footerNav} seo={{ title: `${newsletter.title} | The Gentleman's Journal` }}>
      <SplitPageTemplate image={newsletter.image.sourceUrl} title={newsletter.title}>
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
  const newsletter = await client.query(newsletterModalQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      newsletter: newsletter.data.gjOptions.newsletterModal.modalNewsletter,
      newsletterForm: newsletter.data.gfForm,
    },
  }
}
