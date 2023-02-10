import React, { FC, ReactElement, useContext, useState } from 'react'
import { Formik, Form } from 'formik'

import Heading from '@components/Heading'
import EditButton from '@components/EditButton'
import ValueWithLabel from '@components/ValueWithLabel'

import * as Styled from '../../styles/CustomerDetails.style'
import PageContext, { PageContextProps } from '@context/PageContext'
import TextField from '@components/TextField'

const Password: FC = (): ReactElement => {
  const { customer } = useContext(PageContext) as PageContextProps
  const [editMode, setEditMode] = useState(false)
  return (
    <Styled.DetailsBlock>
      <Styled.DetailsHeading>
        <Heading size={2} font='ChronicleCondensed' text='Password' noMargin />
        {editMode && <EditButton text='Cancel' onClick={() => setEditMode(false)} />}
      </Styled.DetailsHeading>
      {editMode ?
        <Formik
          initialValues={{
            currentPassword: '',
            password: '',
            confirmPassword: '',
          }}  
          onSubmit={async (values) => {
            console.log(values)
          }}
        >
          <Form>
            <TextField isRequired label='Current password' id='currentPassword' target='currentPassword' />
            <TextField isRequired label='New password' id='password' target='password' />
            <TextField isRequired label='Confirm new password' id='confirmPassword' target='confirmPassword' />
            <EditButton type='submit' text='Confirm' />
          </Form>
        </Formik>
        :
        <>
          <ValueWithLabel label='Password' value='••••••' valueType='password' />
          <EditButton onClick={() => setEditMode(true)} text='Change your password' />
        </>
      }
      
    </Styled.DetailsBlock>
  )
}

export default Password