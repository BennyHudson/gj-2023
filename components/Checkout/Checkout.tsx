import React, { ReactElement, FC, useState, useContext } from 'react'
import { Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPenNib } from '@fortawesome/pro-thin-svg-icons'

import Heading from '@components/Heading'
import EditButton from '@components/EditButton'

import * as Styled from './styles/Checkout.style'
import Button from '@components/Button'
import TextField from '@components/TextField'
import Select from '@components/Select'
import NameField from '@components/NameField'
import PageContext, { PageContextProps } from '@context/PageContext'

import { countries } from './countries'

const Checkout: FC = (): ReactElement => {
  const [ activePanel, setActivePanel ] = useState(4)

  const { cart } = useContext(PageContext) as PageContextProps

  console.log(cart)
  

  return (
    <Formik
      initialValues={{
        billing: {
          first_name: '',
          last_name: '',
          address_1: '',
          address_2: '',
          city: '',
          state: '',
          postcode: '',
          country: '',
          email: '',
          phone: '',
        },
        shipping: {
          first_name: '',
          last_name: '',
          address_1: '',
          address_2: '',
          city: '',
          state: '',
          postcode: '',
          country: '',
        },
      }}
      onSubmit={async (values) => {
        console.log(values)
      }}
    >
      {props => (
        <Styled.Checkout>
          <Styled.CheckoutPanels>
            <Styled.CheckoutPanel>
              <Styled.CheckoutHeader>
                <Heading size={2} font='ChronicleCondensed' text='1. Your Details' noMargin />
                {activePanel > 1 && <Styled.IconButton onClick={() => setActivePanel(1)}><FontAwesomeIcon icon={faPenNib as IconProp} /> Edit</Styled.IconButton>}
              </Styled.CheckoutHeader>
              {activePanel === 1 &&
                <> 
                  <NameField
                    isRequired
                    inputs={[
                      {
                        label: 'First Name',
                        id: 'billing.first_name',
                        name: 'billing.first_name',
                      },
                      {
                        label: 'Last Name',
                        id: 'billing.last_name',
                        name: 'billing.last_name',
                      }
                    ]}
                  />
                  <TextField
                    isRequired
                    label='Email Address' 
                    id='billing.email' 
                    target='billing.email'
                    type='email'
                  />
                  <TextField
                    label='Telephone Number' 
                    id='billing.phone' 
                    target='billing.phone'
                    type='telephone'
                  />
                  <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
                </>
              }
            </Styled.CheckoutPanel>
            <Styled.CheckoutPanel>
              <Styled.CheckoutHeader>
                <Heading size={2} font='ChronicleCondensed' text='2. Billing Address' noMargin />
                {activePanel > 2 && <Styled.IconButton onClick={() => setActivePanel(2)}><FontAwesomeIcon icon={faPenNib as IconProp} /> Edit</Styled.IconButton>}
              </Styled.CheckoutHeader>
              {activePanel === 2 &&
                <>
                  <TextField
                    isRequired
                    label='Address Line 1' 
                    id='billing.address_1' 
                    target='billing.address_1'
                  />
                  <TextField
                    label='Address Line 2' 
                    id='billing.address_2' 
                    target='billing.address_2'
                  />
                  <TextField
                    isRequired
                    label='Town' 
                    id='billing.city' 
                    target='billing.city'
                  />
                  <TextField
                    label='County' 
                    id='billing.state' 
                    target='billing.state'
                  />
                  <TextField
                    isRequired
                    label='Postcode' 
                    id='billing.postcode' 
                    target='billing.postcode'
                  />
                  <Select 
                    label='Country' 
                    choices={countries} 
                    isRequired 
                    id='billing.country' 
                    target='billing.country' 
                  />
                  <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
                </>
              }
            </Styled.CheckoutPanel>
            <Styled.CheckoutPanel>
              <Styled.CheckoutHeader>
                <Heading size={2} font='ChronicleCondensed' text='3. Shipping Address' noMargin />
                {activePanel > 3 && <Styled.IconButton onClick={() => setActivePanel(3)}><FontAwesomeIcon icon={faPenNib as IconProp} /> Edit</Styled.IconButton>}
              </Styled.CheckoutHeader>
              {activePanel === 3 &&
                <>
                  <EditButton onClick={() => {
                    props.setFieldValue('shipping.address_1', props.values.billing.address_1)
                    props.setFieldValue('shipping.address_2', props.values.billing.address_2)
                    props.setFieldValue('shipping.city', props.values.billing.city)
                    props.setFieldValue('shipping.state', props.values.billing.state)
                    props.setFieldValue('shipping.postcode', props.values.billing.postcode)
                    props.setFieldValue('shipping.country', props.values.billing.country)
                  }} text='Copy from Billing Address' />
                  <TextField
                    isRequired
                    label='Address Line 1' 
                    id='shipping.address_1' 
                    target='shipping.address_1'
                  />
                  <TextField
                    label='Address Line 2' 
                    id='shipping.address_2' 
                    target='shipping.address_2'
                  />
                  <TextField
                    isRequired
                    label='Town' 
                    id='shipping.city' 
                    target='shipping.city'
                  />
                  <TextField
                    label='County' 
                    id='shipping.state' 
                    target='shipping.state'
                  />
                  <TextField
                    isRequired
                    label='Postcode' 
                    id='shipping.postcode' 
                    target='shipping.postcode'
                  />
                  <Select 
                    label='Country' 
                    choices={countries} 
                    isRequired 
                    id='shipping.country' 
                    target='shipping.country'
                  />
                  <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
                </>
              }
            </Styled.CheckoutPanel>
            <Styled.CheckoutPanel>
              <Styled.CheckoutHeader>
                <Heading size={2} font='ChronicleCondensed' text='4. Order Summary' noMargin />
                {activePanel > 4 && <Styled.IconButton onClick={() => setActivePanel(4)}><FontAwesomeIcon icon={faPenNib as IconProp} /> Edit</Styled.IconButton>}
              </Styled.CheckoutHeader>
              {activePanel === 4 &&
                <> 
                  <Styled.CartItems>
                    {cart.map((cartItem, index) => {
                      return (
                        <Styled.CartItem key={index}>
                          <Heading size={2} font='ChronicleCondensed' text={cartItem.name} />
                          <Paragraph size={2} font='Cera'>£{cartItem.price ? cartItem.price : '0.00 - A free gift from us to you.'}</Paragraph>
                        </Styled.CartItem>
                      )
                    })}
                  </Styled.CartItems>
                  <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
                </>
              }
            </Styled.CheckoutPanel>
            <Styled.CheckoutPanel>
              <Styled.CheckoutHeader>
                <Heading size={2} font='ChronicleCondensed' text='5. Payment' noMargin />
              </Styled.CheckoutHeader>
              {activePanel === 5 &&
                <div>Payment</div>
              }
            </Styled.CheckoutPanel>
          </Styled.CheckoutPanels>
          <Button type='submit' text='Checkout Now' size={1} />
        </Styled.Checkout>
      )}
    </Formik>
  )
}

export default Checkout
