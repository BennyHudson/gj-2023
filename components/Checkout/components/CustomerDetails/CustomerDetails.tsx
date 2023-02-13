import React, { ReactElement, FC, useState, useContext } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import NameField from '@components/NameField'
import TextField from '@components/TextField'
import EditButton from '@components/EditButton'
import ValueWithLabel from '@components/ValueWithLabel'

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
  const { setCustomerId, setToken, customer, setCustomer } = useContext(PageContext) as PageContextProps

  const [ validationMessage, setValidationMessage ] = useState()

  const setLoggedInDetails = () => {
    setCheckoutForm({ billing: customer?.billing })
    setActivePanel(activePanel + 1)
  }

  const logoutHandler = () => {
    setCustomer()
    setToken()
    localStorage.removeItem('gjToken')
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validation = Yup.object().shape({
    billing: Yup.object().shape({
      first_name: Yup.string().required('Required field'),
      last_name: Yup.string().required('Required field'),
      email: Yup.string().email('Please enter a valid email address').required('Required field'),
      phone: Yup.string().matches(phoneRegExp, 'Please enter a valid telephone number'),
    }),
    password: Yup.string().required('Required field'),
    confirmPassword: Yup.string().required('Required field').oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  return (
    <CheckoutPanel panelIndex={panelIndex} activePanel={activePanel} setActivePanel={setActivePanel} title='Your Details'> 
      {customer ? 
        <>
          <ValueWithLabel label='First name' value={customer.first_name} />
          <ValueWithLabel label='Last name' value={customer.last_name} />
          <ValueWithLabel label='Email Address' value={customer.email} />
          <EditButton text='Not you?' onClick={logoutHandler} />
          <EditButton text='Continue' onClick={() => setLoggedInDetails()} />
        </> 
        :
        <Tabs tabs={[
          {
            title: 'Create a new account',
            content: <Formik
              validationSchema={validation}
              validateOnBlur={false}
              validateOnChange={false}
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
                  if (customer.code === 'registration-error-email-exists') {
                    setValidationMessage('An account is already registered with this email address, please login above.')
                  }
                  // setShowLoginForm(true)
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
                    validationMessage={props.errors.billing?.first_name || props.errors.billing?.last_name}
                  />
                  <TextField isRequired label='Email Address' id='billing.email' target='billing.email' type='email' validationMessage={props.errors.billing?.email || validationMessage} />
                  <TextField label='Telephone Number' id='billing.phone' target='billing.phone' type='telephone' validationMessage={props.errors.billing?.phone} />
                  <TextField isRequired label='Create a Password' id='password' target='password' type='password' validationMessage={props.errors.password} />
                  <TextField isRequired label='Confirm Password' id='confirmPassword' target='confirmPassword' type='password' validationMessage={props.errors.confirmPassword} />
                  <EditButton type='submit' text='Continue' />
                </Form>
              )}
            </Formik>
          },
          {
            title: 'Login',
            content: <LoginForm />
          }
        ]} />
      }
    </CheckoutPanel>
  )
}

export default CustomerDetails
