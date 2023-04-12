/* eslint-disable react/prop-types */
import { Form, Formik } from 'formik'
import type { FC, ReactElement} from 'react'
import React, { useContext, useState } from 'react'
import * as Yup from 'yup'

import EditButton from '@components/EditButton'
import Heading from '@components/Heading'
import Notification from '@components/Notification'
import TextField from '@components/TextField'
import ValueWithLabel from '@components/ValueWithLabel'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import * as Styled from '../../styles/CustomerDetails.style'

const Password: FC = (): ReactElement | null => {
  const [editMode, setEditMode] = useState(false)
  const [passwordMessage, setPasswordMessage] = useState()
  const [showPostEditMessage, setShowPostEditMessage] = useState(false)
  const { customer } = useContext(PageContext) as PageContextProps

  if (!customer) return null

  const passwordValidation = Yup.object().shape({
    password: Yup.string().required('Required field'),
    confirmPassword: Yup.string()
      .required('Required field')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  })

  return (
    <Styled.DetailsBlock>
      <Styled.DetailsHeading>
        <Heading size={2} font='ChronicleCondensed' text='Password' noMargin />
        {editMode && <EditButton text='Cancel' onClick={() => setEditMode(false)} />}
      </Styled.DetailsHeading>
      {editMode ? (
        <Formik
          validationSchema={passwordValidation}
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            currentPassword: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={async (values) => {
            const formData = new FormData()

            formData.append('username', customer.email)
            formData.append('password', values.currentPassword)

            const tokenData = await fetch('https://cms.thegentlemansjournal.com/wp-json/jwt-auth/v1/token', {
              method: 'POST',
              body: formData,
              redirect: 'follow',
            })

            const passwordCheck = await tokenData.json()

            if (passwordCheck.statusCode === 200) {
              const updateUser = await fetch(`/api/user/update/${customer?.id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  password: values.password,
                }),
              })

              if (updateUser.status === 200) {
                setEditMode(false)
                setShowPostEditMessage(true)
                setTimeout(() => {
                  setShowPostEditMessage(false)
                }, 5000)
              }
              return
            }
            setPasswordMessage('The password you have entered is incorrect.')
          }}
        >
          {(props) => (
            <Form>
              <TextField
                isRequired
                type='password'
                label='Current password'
                id='currentPassword'
                target='currentPassword'
                validationMessage={passwordMessage}
              />
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
              <EditButton type='submit' text='Confirm' />
            </Form>
          )}
        </Formik>
      ) : (
        <>
          {showPostEditMessage && <Notification text='Password updated successfully' state='success' />}
          <ValueWithLabel label='Password' value='••••••' valueType='password' />
          <EditButton onClick={() => setEditMode(true)} text='Change your password' />
        </>
      )}
    </Styled.DetailsBlock>
  )
}

export default Password
