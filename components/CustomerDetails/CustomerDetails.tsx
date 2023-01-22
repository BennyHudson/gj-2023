import React, { ReactElement, FC } from 'react'

import Heading from '@components/Heading'

import * as Styled from './styles/CustomerDetails.style'

import { CustomerDetailsProps } from './CustomerDetails.types'
import ValueWithLabel from '@components/ValueWithLabel'
import EditButton from '@components/EditButton'

const CustomerDetails: FC<CustomerDetailsProps> = ({
  customer,
}: CustomerDetailsProps): ReactElement => {
  // console.log(customer)
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
        <Heading size={2} font='ChronicleCondensed' text='Billing Address' />
        <ValueWithLabel label='Address Line 1' value={customer.billing.address_1} />
        <ValueWithLabel label='Address Line 2' value={customer.billing.address_2} />
        <ValueWithLabel label='City' value={customer.billing.city} />
        <ValueWithLabel label='State' value={customer.billing.state} />
        <ValueWithLabel label='Postcode' value={customer.billing.postcode} />
        <ValueWithLabel label='Telephone' value={customer.billing.phone} />
        <EditButton onClick={() => console.log('hello')} text='Edit these Details' />
      </Styled.DetailsBlock>
      {customer.is_paying_customer &&
        <>
          <Styled.DetailsBlock>
            <Heading size={2} font='ChronicleCondensed' text='Shipping Address' />
            <ValueWithLabel label='Address Line 1' value={customer.shipping.address_1} />
            <ValueWithLabel label='Address Line 2' value={customer.shipping.address_2} />
            <ValueWithLabel label='City' value={customer.shipping.city} />
            <ValueWithLabel label='State' value={customer.shipping.state} />
            <ValueWithLabel label='Postcode' value={customer.shipping.postcode} />
            <ValueWithLabel label='Telephone' value={customer.shipping.phone} />
            <EditButton onClick={() => console.log('hello')} text='Edit these Details' />
          </Styled.DetailsBlock>
        </>
      }
    </Styled.CustomerDetails>
  )
}

export default CustomerDetails
