import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import type { FC, ReactElement} from 'react'
import React, { useContext, useEffect, useState } from 'react'
import * as Yup from 'yup'

import Button from '@components/Button/Button'
import Notification from '@components/Notification'
import PageLayout from '@components/PageLayout'
import SplitPageTemplate from '@components/SplitPageTemplate'
import TextField from '@components/TextField/TextField'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import featuredImageUrl from '@helpers/featuredImageUrl'

import useResetPassword from '@hooks/useResetPassword'

import client from '@lib/apollo-client'

import { footerNavQuery } from '@queries/global/footer-nav'
import { freeGiftQuery } from '@queries/global/free-gift'
import { headerNavQuery } from '@queries/global/header-nav'
import { siteOptionsQuery } from '@queries/global/site-options'
import { subscriptionProductsQuery } from '@queries/global/subscription-products'

const ClubPage: FC = ({ headerNav, footerNav, siteOptions }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  const [success, setSuccess] = useState(false)

  const router = useRouter()
  const resetPassword = useResetPassword()

  useEffect(() => {
    setActiveNavElement(-1)
  }, [setActiveNavElement])

  useEffect(() => {
    if (resetPassword.status === 'resolved' && !resetPassword.error) {
      setSuccess(true)
      localStorage.removeItem('resetKey')
      localStorage.removeItem('customerId')

      setTimeout(() => {
        router.push('/clubhouse')
      }, 5000)
    }
  }, [resetPassword])

  const passwordValidation = Yup.object().shape({
    password: Yup.string().required('Required field'),
    confirmPassword: Yup.string()
      .required('Required field')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  })

  if (success) {
    return (
      <PageLayout
        headerStyle='standard'
        headerNav={headerNav}
        footerNav={footerNav}
        seo={{ title: 'Clubhouse | The Gentleman\'s Journal' }}
        siteOptions={siteOptions}
      >
        <SplitPageTemplate
          image={featuredImageUrl(siteOptions.gjOptions.splitPageImages.accountPage.sourceUrl)}
          title='Reset your password'
        >
          <Notification state='success' text='Password reset successfully, you are being redirected to The Clubhouse' />
        </SplitPageTemplate>
      </PageLayout>
    )
  }

  return (
    <PageLayout
      headerStyle='standard'
      headerNav={headerNav}
      footerNav={footerNav}
      seo={{ title: 'Clubhouse | The Gentleman\'s Journal' }}
      siteOptions={siteOptions}
    >
      <SplitPageTemplate image={featuredImageUrl(siteOptions.gjOptions.splitPageImages.accountPage.sourceUrl)} title='Reset your password'>
        <Formik
          validationSchema={passwordValidation}
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values) => {
            const resetKey = router.query.key
            const resetLogin = router.query.email

            if (resetKey && resetLogin) {
              resetPassword.resetUserPassword(resetKey, resetLogin, values.password)
            }
          }}
        >
          {(props) => (
            <Form>
              <TextField
                isRequired
                type='password'
                label='New password'
                id='password'
                target='password'
                validationMessage={props.errors.password}
              />
              <TextField
                isRequired
                type='password'
                label='Confirm new password'
                id='confirmPassword'
                target='confirmPassword'
                validationMessage={props.errors.confirmPassword}
              />
              <Button type='submit' text='Confirm' size={1} />
            </Form>
          )}
        </Formik>
      </SplitPageTemplate>
    </PageLayout>
  )
}

export default ClubPage

export async function getStaticProps() {
  const headerNav = await client.query(headerNavQuery)
  const footerNav = await client.query(footerNavQuery)
  const subscriptionProducts = await client.query(subscriptionProductsQuery)
  const freeGift = await client.query(freeGiftQuery)
  const siteOptions = await client.query(siteOptionsQuery)

  return {
    props: {
      headerNav: headerNav.data,
      footerNav: footerNav.data,
      subscriptionProducts: subscriptionProducts.data.products.nodes,
      freeGift: freeGift.data.products.nodes.length > 0 && freeGift.data.products.nodes[0],
      siteOptions: siteOptions.data,
    },
  }
}
