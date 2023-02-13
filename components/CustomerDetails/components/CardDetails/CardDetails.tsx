import React, { FC, ReactElement, useContext, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Heading from '@components/Heading'
import EditButton from '@components/EditButton'
import ValueWithLabel from '@components/ValueWithLabel'

import * as Styled from '../../styles/CustomerDetails.style'
import PageContext, { PageContextProps } from '@context/PageContext'
import TextField from '@components/TextField'
import Notification from '@components/Notification'

const CardDetails: FC = (): ReactElement | null => {
  const [editMode, setEditMode] = useState(false)
  const [passwordMessage, setCardDetailsMessage] = useState()
  const [showPostEditMessage, setShowPostEditMessage] = useState(false)
  const { customer } = useContext(PageContext) as PageContextProps

  if (!customer) return null

  const passwordValidation = Yup.object().shape({
    password: Yup.string().required('Required field'),
    confirmCardDetails: Yup.string().required('Required field').oneOf([Yup.ref('password'), null], 'CardDetailss must match')
  })

  return (
    <Styled.DetailsBlock>
      <Styled.DetailsHeading>
        <Heading size={2} font='ChronicleCondensed' text='Payment Details' noMargin />
        {editMode && <EditButton text='Cancel' onClick={() => setEditMode(false)} />}
      </Styled.DetailsHeading>
      {editMode ?
        <Formik
          validationSchema={passwordValidation}
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            currentCardDetails: '',
            password: '',
            confirmCardDetails: '',
          }}  
          onSubmit={async (values) => {
            const formData = new FormData()

            formData.append('username', customer.email)
            formData.append('password', values.currentCardDetails)

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
                })
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
            setCardDetailsMessage('The password you have entered is incorrect.')
          }}
        >
          {(props) => (
            <Form>
              <TextField isRequired type='password' label='Current password' id='currentCardDetails' target='currentCardDetails' validationMessage={passwordMessage} />
              <TextField isRequired type='password' label='New password' id='password' target='password' validationMessage={props.errors.password} />
              <TextField isRequired type='password' label='Confirm new password' id='confirmCardDetails' target='confirmCardDetails' validationMessage={props.errors.confirmCardDetails} />
              <EditButton type='submit' text='Confirm' />
            </Form>
          )}
        </Formik>
        :
        <>
          {showPostEditMessage && <Notification text='Card details updated successfully' state='success'  />}
          <ValueWithLabel label='Card Details' value='••••••' valueType='password' />
          <EditButton onClick={() => setEditMode(true)} text='Update card details' />
        </>
      }
      
    </Styled.DetailsBlock>
  )
}

export default CardDetails