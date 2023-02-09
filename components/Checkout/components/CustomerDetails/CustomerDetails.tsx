import React, { ReactElement, FC, useState, useContext } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import NameField from '@components/NameField'
import TextField from '@components/TextField'
import EditButton from '@components/EditButton'

import Tabs from '@components/Tabs'
import LoginForm from '@components/LoginForm'

import { CustomerDetailsProps } from './CustomerDetails.types'
import CheckoutPanel from '../CheckoutPanel'
import PageContext, { PageContextProps } from '@context/PageContext'

const CustomerDetails: FC<CustomerDetailsProps> = ({
  panelIndex,
  activePanel,
  setActivePanel,
  setCheckoutForm,
}: CustomerDetailsProps): ReactElement => {
  const { customerId, setCustomerId, setToken } = useContext(PageContext) as PageContextProps
  // const { showLoginForm, setShowLoginForm } = useState(false)

  return (
    <CheckoutPanel panelIndex={panelIndex} activePanel={activePanel} setActivePanel={setActivePanel} title='Your Details'> 
      <Tabs tabs={[
        {
          title: 'Create a new account',
          content: <Formik
            initialValues={{
              billing: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
              },
              password: '',
              confirmPassword: '',
            }}
            onSubmit={async (values) => {
              const createCustomer = await fetch('/api/user/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
              })
              const customer = await createCustomer.json()
              
              if (createCustomer.status === 200) {
                setCustomerId(customer.id)

                const formData = new FormData()
                formData.append('username', values.billing.email)
                formData.append('password', values.password)

                const tokenData = await fetch('https://cms.thegentlemansjournal.com/wp-json/jwt-auth/v1/token', {
                  method: 'POST',
                  body: formData,
                  redirect: 'follow',
                })

                const login = await tokenData.json()
                if (login.data) {
                  setToken(login.data.token)
                  localStorage.setItem('gjToken', login.data.token)
                }

                setCheckoutForm({ billing: values.billing })
                setActivePanel(activePanel + 1)
              } else {
                console.log(createCustomer)
                // setShowLoginForm(true)
              }
            }}
          >
            <Form>
              <NameField
                inputs={[
                  {
                    isRequired: true,
                    label: 'First Name',
                    id: 'billing.first_name',
                    name: 'billing.first_name',
                  },
                  {
                    isRequired: true,
                    label: 'Last Name',
                    id: 'billing.last_name',
                    name: 'billing.last_name',
                  },
                ]}
              />
              <TextField isRequired label='Email Address' id='billing.email' target='billing.email' type='email' />
              <TextField label='Telephone Number' id='billing.phone' target='billing.phone' type='telephone' />
              <TextField isRequired label='Create a Password' id='password' target='password' type='password' />
              <TextField isRequired label='Confirm Password' id='confirmPassword' target='confirmPassword' type='password' />
              <EditButton type='submit' text='Continue' />
            </Form>
          </Formik>
        },
        {
          title: 'Login',
          content: <LoginForm />
        }
      ]} />
    </CheckoutPanel>
  )
}

export default CustomerDetails
