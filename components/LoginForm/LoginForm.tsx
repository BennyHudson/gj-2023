import React, { ReactElement, FC, useContext, useState, useEffect } from 'react'
import { Formik } from 'formik'

import TextField from '@components/TextField'

import * as Styled from './styles/LoginForm.style'

import { LoginFormProps } from './LoginForm.types'
import Button from '@components/Button'
import PageContext, { PageContextProps } from '@context/PageContext'
import EditButton from '@components/EditButton'
import useResetPassword from '@hooks/useResetPassword'
import Notification from '@components/Notification'

const LoginForm: FC<LoginFormProps> = (): ReactElement => {
  const { setToken, setCustomer, setCustomerId } = useContext(PageContext) as PageContextProps
  const [forgotPassword, setForgotPassword] = useState(false)

  const [ success, setSuccess ] = useState(false)

  const resetPassword = useResetPassword()

  useEffect(() => {
    if (resetPassword.status === 'resolved' && ! resetPassword.error) {
      setSuccess(true)
    }
  }, [resetPassword])

  if (success) {
    return (
      <Notification state='success' text='An email with reset instructions has been sent to your inbox' />
    )
  }

  if (forgotPassword) {
    return (
      <Formik
        initialValues={{
          username: '',
        }}
        onSubmit={async (values) => {
          resetPassword.sendResetPasswordEmail(values.username)
        }}
      >
        <>
          <Styled.LoginForm>
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
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={async (values) => {
        const formData = new FormData()

        formData.append('username', values.username)
        formData.append('password', values.password)

        const tokenData = await fetch('https://cms.thegentlemansjournal.com/wp-json/jwt-auth/v1/token', {
          method: 'POST',
          body: formData,
          redirect: 'follow',
        })

        const customer = await tokenData.json()

        if (customer.data) {
          const customerDetails = await fetch(`/api/user/${customer.data.id}`)
          const customerData = await customerDetails.json()
          setCustomer(customerData)
          setCustomerId(customerData.id)
          setToken(customer.data.token)
          localStorage.setItem('gjToken', customer.data.token)
        }
      }}
    >
      <>
        <Styled.LoginForm>
          <TextField label='Email Address' id='username' isRequired={false} target='username' />
          <TextField label='Password' id='password' type='password' isRequired={false} target='password' />
          <Styled.LoginFooter>
            <Button type='submit' text='Login' />
            <EditButton text='Forgot Password?' onClick={() => setForgotPassword(true)} />
          </Styled.LoginFooter>
        </Styled.LoginForm>
      </>
    </Formik>
  )
}

export default LoginForm
