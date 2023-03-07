import React, { FC, ReactElement, useContext, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Heading from '@components/Heading'
import EditButton from '@components/EditButton'
import ValueWithLabel from '@components/ValueWithLabel'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from '../../styles/CustomerDetails.style'
import NameField from '@components/NameField'
import TextField from '@components/TextField'
import Notification from '@components/Notification'

const Customer: FC = (): ReactElement | null => {
  const { customer } = useContext(PageContext) as PageContextProps
  const [editMode, setEditMode] = useState(false)
  const [showPostEditMessage, setShowPostEditMessage] = useState(false)

  if (!customer) return null

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validation = Yup.object().shape({
    first_name: Yup.string().required('Required field'),
    last_name: Yup.string().required('Required field'),
    email: Yup.string().email('Please enter a valid email address').required('Required field'),
    phone: Yup.string().matches(phoneRegExp, 'Please enter a valid telephone number'),
  })

  return (
    <Styled.DetailsBlock>
      <Styled.DetailsHeading>
        <Heading size={2} font='ChronicleCondensed' text='You' noMargin />
        {editMode && <EditButton text='Cancel' onClick={() => setEditMode(false)} />}
      </Styled.DetailsHeading>
      {editMode ? (
        <Formik
          validationSchema={validation}
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            first_name: customer.first_name,
            last_name: customer.last_name,
            email: customer.email,
            phone: customer.billing?.phone,
          }}
          onSubmit={async (values) => {
            const updateUser = await fetch(`/api/user/update/${customer?.id}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values),
            })

            if (updateUser.status === 200) {
              setEditMode(false)
              setShowPostEditMessage(true)
              setTimeout(() => {
                setShowPostEditMessage(false)
              }, 5000)
            }
          }}
        >
          {(props) => (
            <Form>
              <NameField
                inputs={[
                  {
                    isRequired: true,
                    label: 'First Name',
                    id: 'first_name',
                    name: 'first_name',
                  },
                  {
                    isRequired: true,
                    label: 'Last Name',
                    id: 'last_name',
                    name: 'last_name',
                  },
                ]}
                validationMessage={props.errors?.first_name || props.errors?.last_name}
              />
              <TextField isRequired label='Email Address' id='email' target='email' type='email' validationMessage={props.errors?.email} />
              <TextField
                label='Telephone Number'
                id='billing.phone'
                target='billing.phone'
                type='telephone'
                validationMessage={props.errors?.billing?.phone}
              />
              <EditButton type='submit' text='Continue' />
            </Form>
          )}
        </Formik>
      ) : (
        <>
          {showPostEditMessage && <Notification text='Personal details updated successfully' state='success' />}
          <ValueWithLabel label='First name' value={customer.first_name} />
          <ValueWithLabel label='Last name' value={customer.last_name} />
          <ValueWithLabel label='Email Address' value={customer.email} />
          {customer.billing?.phone && <ValueWithLabel label='Telephone' value={customer.billing.phone} />}
          <EditButton onClick={() => setEditMode(true)} text='Edit these Details' />
        </>
      )}
    </Styled.DetailsBlock>
  )
}

export default Customer
