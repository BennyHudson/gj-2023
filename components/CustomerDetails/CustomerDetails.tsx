import React, { ReactElement, FC } from 'react'

import Heading from '@components/Heading'

import * as Styled from './styles/CustomerDetails.style'

import { CustomerDetailsProps } from './CustomerDetails.types'
import ValueWithLabel from '@components/ValueWithLabel'
import EditButton from '@components/EditButton'

const CustomerDetails: FC<CustomerDetailsProps> = ({ customer }: CustomerDetailsProps): ReactElement => {
  console.log(customer)
  return (
    <Styled.CustomerDetails>
      <Styled.DetailsBlock>
        <Heading size={2} font='ChronicleCondensed' text='You' />
        <ValueWithLabel label='First name' value={customer.first_name} />
        <ValueWithLabel label='Last name' value={customer.last_name} />
        <ValueWithLabel label='Email Address' value={customer.email} />
        <EditButton onClick={() => console.log('hello')} text='Edit these Details' />
      </Styled.DetailsBlock>

      <Styled.DetailsBlock>
        <Heading size={2} font='ChronicleCondensed' text='Password' />
        <ValueWithLabel label='Password' value='••••••' valueType='password' />
        <EditButton onClick={() => console.log('hello')} text='Change your password' />
      </Styled.DetailsBlock>

      <Styled.DetailsBlock>
        <Heading size={2} font='ChronicleCondensed' text='Billing Address' />
        {customer.billing.address_1 && <ValueWithLabel label='Address Line 1' value={customer.billing.address_1} />}
        {customer.billing.address_2 && <ValueWithLabel label='Address Line 2' value={customer.billing.address_2} />}
        {customer.billing.city && <ValueWithLabel label='City' value={customer.billing.city} />}
        {customer.billing.state && <ValueWithLabel label='State' value={customer.billing.state} />}
        {customer.billing.postcode && <ValueWithLabel label='Postcode' value={customer.billing.postcode} />}
        {customer.billing.phone && <ValueWithLabel label='Telephone' value={customer.billing.phone} />}
        <EditButton onClick={() => console.log('hello')} text='Edit these Details' />
      </Styled.DetailsBlock>

      <Styled.DetailsBlock>
        <Heading size={2} font='ChronicleCondensed' text='Shipping Address' />
        {customer.shipping.address_1 && <ValueWithLabel label='Address Line 1' value={customer.shipping.address_1} />}
        {customer.shipping.address_2 && <ValueWithLabel label='Address Line 2' value={customer.shipping.address_2} />}
        {customer.shipping.city && <ValueWithLabel label='City' value={customer.shipping.city} />}
        {customer.shipping.state && <ValueWithLabel label='State' value={customer.shipping.state} />}
        {customer.shipping.postcode && <ValueWithLabel label='Postcode' value={customer.shipping.postcode} />}
        {customer.shipping.phone && <ValueWithLabel label='Telephone' value={customer.shipping.phone} />}
        <EditButton onClick={() => console.log('hello')} text='Edit these Details' />
      </Styled.DetailsBlock>
    </Styled.CustomerDetails>
  )
}

export default CustomerDetails
