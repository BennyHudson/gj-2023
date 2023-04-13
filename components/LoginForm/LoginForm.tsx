/* eslint-disable react/prop-types */
import { Formik } from 'formik'
import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect, useState } from 'react'
import * as Yup from 'yup'

import Button from '@components/Button'
import EditButton from '@components/EditButton'
import Notification from '@components/Notification'
import TextField from '@components/TextField'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import useResetPassword from '@hooks/useResetPassword'

import * as Styled from './styles/LoginForm.style'

const LoginForm: FC = (): ReactElement => {
  const { setToken, setCustomer, setCustomerId, getCustomerData } = useContext(PageContext) as PageContextProps
  const [forgotPassword, setForgotPassword] = useState(false)
  const [loginError, setLoginError] = useState()
  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(false)

  const resetPassword = useResetPassword()

  const passwordValidation = Yup.object().shape({
    username: Yup.string().email('Please enter a valid email address').required('Required field'),
    password: Yup.string().required('Required field'),
  })

  useEffect(() => {
    if (resetPassword.status === 'resolved' && !resetPassword.error) {
      setSuccess(true)
    }
  }, [resetPassword])

  if (success) {
    return <Notification state='success' text='An email with reset instructions has been sent to your inbox' />
  }

  if (forgotPassword) {
    return (
      <Formik
        initialValues={{
          username: '',
        }}
        onSubmit={async (values) => {
          setLoading(true)
          resetPassword.sendResetPasswordEmail(values.username)
        }}
      >
        <>
          <Styled.LoginForm isLoading={loading}>
            <TextField label='Email Address' id='username' isRequired={false} target='username' />
            <Styled.LoginFooter>
              <Button type='submit' text='Reset my password' />
            </Styled.LoginFooter>
          </Styled.LoginForm>
        </>
      </Formik>
    )
  }

  return (
    <Formik
      validationSchema={passwordValidation}
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={async (values) => {
        setLoading(true)
        const formData = new FormData()

        formData.append('username', values.username)
        formData.append('password', values.password)

        const tokenData = await fetch('https://cms.thegentlemansjournal.com/wp-json/jwt-auth/v1/token', {
          method: 'POST',
          body: formData,
          redirect: 'follow',
        })

        const customer = await tokenData.json()

        if (customer.statusCode !== 200) {
          setLoginError(customer.message)
          setLoading(false)
          return
        }

        const customerDetails = await fetch(`/api/user/${customer.data.id}`)
        const customerData = await customerDetails.json()
        setCustomer(customerData)
        setCustomerId(customerData.id)
        setToken(customer.data.token)
        getCustomerData(customerData.id)
        localStorage.setItem('gjToken', customer.data.token)

        setLoading(false)
      }}
    >
      {(props) => (
        <Styled.LoginForm isLoading={loading}>
          {loginError && <Notification state='error' text={loginError} />}
          <TextField label='Email Address' id='username' isRequired={false} target='username' validationMessage={props.errors?.username} />
          <TextField
            label='Password'
            id='password'
            type='password'
            isRequired={false}
            target='password'
            validationMessage={props.errors?.password}
          />
          <Styled.LoginFooter>
            <Button type='submit' text='Login' />
            <EditButton text='Forgot Password?' onClick={() => setForgotPassword(true)} />
          </Styled.LoginFooter>
        </Styled.LoginForm>
      )}
    </Formik>
  )
}

export default LoginForm
