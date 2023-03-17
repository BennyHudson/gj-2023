import React, { FC, ReactElement, useEffect, useState } from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'
import HeadTags from '@components/HeadTags'
import NewsletterModal from '@components/NewsletterModal'

import * as Styled from './styles/PageLayout.style'

import { PageLayoutProps } from './PageLayout.types'

const PageLayout: FC<PageLayoutProps> = ({
  children,
  headerNav,
  footerNav,
  seo,
  headerStyle = 'feature',
  siteOptions,
}: PageLayoutProps): ReactElement => {
  const [ showNewsletterModal, setShowNewsletterModal ] = useState(false)

  const loadModal = () => {
    setTimeout(() => {
      setShowNewsletterModal(true)
      localStorage.setItem('newsletterModal', 'yes')
    }, 5000)
  }

  useEffect(() => {
    if (siteOptions && !localStorage.getItem('newsletterModal')) {
      loadModal()
    }
  }, [])

  return (
    <Styled.PageLayout>
      <HeadTags seo={seo} />
      {(showNewsletterModal && siteOptions) && <NewsletterModal newsletterForm={siteOptions.gfForm} backgroundImage={siteOptions.gjOptions.newsletterModal.modalNewsletter.image.sourceUrl} setShowNewsletterModal={setShowNewsletterModal} />}
      <Header headerStyle={headerStyle} headerNav={headerNav} />
      <Styled.Page>{children}</Styled.Page>
      <Footer footerNav={footerNav} />
    </Styled.PageLayout>
  )
}

export default PageLayout
