import React, { FC, ReactElement, useContext, useEffect } from 'react'

import PageContext, { PageContextProps } from '@context/PageContext'

import Section from '@components/Section'
import Breadcrumbs from '@components/Breadcrumbs'
import Title from '@components/Title'

import Feed from '@components/Feed'

const LatestPage: FC = (): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(0)
  }, [setActiveNavElement])

  const breadcrumbLinks = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'Latest',
      url: '/latest'
    },
  ]

  return (
    <Section>
      <Breadcrumbs links={breadcrumbLinks} />
      <Title title='Latest' />
      <Feed />
    </Section>
  )
}

export default LatestPage