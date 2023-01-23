import React, { ReactElement, FC, useContext } from 'react'
import { Formik } from 'formik'

import TextField from '@components/TextField'

import * as Styled from './styles/LoginForm.style'

import { LoginFormProps } from './LoginForm.types'
import Button from '@components/Button'
import PageContext, { PageContextProps } from '@context/PageContext'

const LoginForm: FC<LoginFormProps> = (): ReactElement => {
  const { setToken, setCustomerId } = useContext(PageContext) as PageContextProps

  return (
    <Formik
      initialValues={{
        input_1: '',
        input_2: '',
      }}
      onSubmit={async (values) => {
        const myHeaders = new Headers()
        const formData = new FormData()

        formData.append('username', values.input_1)
        formData.append('password', values.input_2)

        const tokenData = await fetch('https://dev.thegentlemansjournal.com/wp-json/jwt-auth/v1/token', {
          method: 'POST',
          headers: myHeaders,
          body: formData,
          redirect: 'follow',
        })

        const customer = await tokenData.json()

        if (customer.data) {
          setToken(customer.data.token)
          setCustomerId(customer.data.id)
        }
      }}
    >
      <>
        <Styled.LoginForm>
          <TextField label='Username/Email Address' id={1} isRequired={false} target={1} />
          <TextField label='Password' id={2} type='password' isRequired={false} target={2} />
          <Button type='submit' text='Login' />
        </Styled.LoginForm>
      </>
    </Formik>
  )
}

export default LoginForm
