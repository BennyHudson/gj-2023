import React, { ReactElement, FC } from 'react'
import { Formik } from 'formik'

import TextField from '@components/TextField'

import * as Styled from './styles/LoginForm.style'

import { LoginFormProps } from './LoginForm.types'

const LoginForm: FC<LoginFormProps> = (): ReactElement => {
  return (
    <Formik
      initialValues={{
        input_1: '',
        input_2: '',
      }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Styled.LoginForm>
        <TextField label='Username/Email Address' id={1} />
        <TextField label='Password' id={2} type='password' />
      </Styled.LoginForm>
    </Formik>
  )
}

export default LoginForm
