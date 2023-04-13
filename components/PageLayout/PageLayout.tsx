import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect, useState } from 'react'

import Footer from '@components/Footer'
import Header from '@components/Header'
import HeadTags from '@components/HeadTags'
import NewsletterModal from '@components/NewsletterModal'
import Toolbar from '@components/Toolbar'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { PageLayoutProps } from './PageLayout.types'
import * as Styled from './styles/PageLayout.style'

const PageLayout: FC<PageLayoutProps> = ({
  children,
  headerNav,
  footerNav,
  seo,
  headerStyle = 'standard',
  siteOptions,
  databaseId,
}: PageLayoutProps): ReactElement => {
  const { showToolbar } = useContext(PageContext) as PageContextProps

  const [showNewsletterModal, setShowNewsletterModal] = useState(false)

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
      <HeadTags seo={seo} siteOptions={siteOptions} />
      {showNewsletterModal && siteOptions && (
        <NewsletterModal
          newsletterForm={siteOptions.gfForm}
          backgroundImage={siteOptions.gjOptions.newsletterModal.modalNewsletter.image.large}
          setShowNewsletterModal={setShowNewsletterModal}
        />
      )}
      <Header headerStyle={headerStyle} headerNav={headerNav} />
      {showToolbar && <Toolbar databaseId={databaseId} />}
      <Styled.Page>{children}</Styled.Page>
      <Footer footerNav={footerNav} />
    </Styled.PageLayout>
  )
}

export default PageLayout
