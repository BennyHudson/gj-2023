import React, { ReactElement, FC, useContext, useState } from 'react'

import Heading from '@components/Heading'

import * as Styled from './styles/CustomerDetails.style'

import ValueWithLabel from '@components/ValueWithLabel'
import EditButton from '@components/EditButton'
import PageContext, { PageContextProps } from '@context/PageContext'
import BillingAddress from '@components/Checkout/components/BillingAddress'

const CustomerDetails: FC = (): ReactElement => {
  const { customer } = useContext(PageContext) as PageContextProps

  const [editDetails, setEditDetails] = useState(false)
  const [editPassword, setEditPassword] = useState(false)
  const [editBilling, setEditBilling] = useState(false)
  const [editShipping, setEditShipping] = useState(false)


  return (
    <Styled.CustomerDetails>
      <Styled.DetailsBlock>
        <Styled.DetailsHeading>
          <Heading size={2} font='ChronicleCondensed' text='You' noMargin />
          {editDetails && <EditButton text='Cancel' onClick={() => setEditDetails(false)} />}
        </Styled.DetailsHeading>
        <ValueWithLabel label='First name' value={customer.first_name} />
        <ValueWithLabel label='Last name' value={customer.last_name} />
        <ValueWithLabel label='Email Address' value={customer.email} />
        {customer.billing.phone && <ValueWithLabel label='Telephone' value={customer.billing.phone} />}
        <EditButton onClick={() => setEditDetails(true)} text='Edit these Details' />
      </Styled.DetailsBlock>

      <Styled.DetailsBlock>
        <Styled.DetailsHeading>
          <Heading size={2} font='ChronicleCondensed' text='Password' noMargin />
          {editPassword && <EditButton text='Cancel' onClick={() => setEditPassword(false)} />}
        </Styled.DetailsHeading>
        <ValueWithLabel label='Password' value='••••••' valueType='password' />
        <EditButton onClick={() => setEditPassword(true)} text='Change your password' />
      </Styled.DetailsBlock>

      <Styled.DetailsBlock>
        <Styled.DetailsHeading>
          <Heading size={2} font='ChronicleCondensed' text='Billing Address' noMargin />
          {editBilling && <EditButton text='Cancel' onClick={() => setEditBilling(false)} />}
        </Styled.DetailsHeading>
        {editBilling ? 
          <>
            Edit Billing
          </>
          :
          <>
            {customer.billing.address_1 && <ValueWithLabel label='Address Line 1' value={customer.billing.address_1} />}
            {customer.billing.address_2 && <ValueWithLabel label='Address Line 2' value={customer.billing.address_2} />}
            {customer.billing.city && <ValueWithLabel label='City' value={customer.billing.city} />}
            {customer.billing.state && <ValueWithLabel label='State' value={customer.billing.state} />}
            {customer.billing.postcode && <ValueWithLabel label='Postcode' value={customer.billing.postcode} />}
            {customer.billing.country && <ValueWithLabel label='Country' value={customer.billing.country} />}
            <EditButton onClick={() => setEditBilling(true)} text='Edit these Details' />
          </>
        }
      </Styled.DetailsBlock>

      <Styled.DetailsBlock>
        <Styled.DetailsHeading>
          <Heading size={2} font='ChronicleCondensed' text='Shipping Address' noMargin />
          {editShipping && <EditButton text='Cancel' onClick={() => setEditShipping(false)} />}
        </Styled.DetailsHeading>
        {customer.shipping.address_1 && <ValueWithLabel label='Address Line 1' value={customer.shipping.address_1} />}
        {customer.shipping.address_2 && <ValueWithLabel label='Address Line 2' value={customer.shipping.address_2} />}
        {customer.shipping.city && <ValueWithLabel label='City' value={customer.shipping.city} />}
        {customer.shipping.state && <ValueWithLabel label='State' value={customer.shipping.state} />}
        {customer.shipping.postcode && <ValueWithLabel label='Postcode' value={customer.shipping.postcode} />}
        {customer.shipping.country && <ValueWithLabel label='Country' value={customer.shipping.country} />}
        <EditButton onClick={() => setEditShipping(true)} text='Edit these Details' />
      </Styled.DetailsBlock>
    </Styled.CustomerDetails>
  )
}

export default CustomerDetails
