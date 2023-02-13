import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/CustomerDetails.style'

import BillingAddress from './components/BillingAddress'
import ShippingAddress from './components/ShippingAddress'
import Password from './components/Password'
import Customer from './components/Customer/Customer'
import CardDetails from './components/CardDetails'

const CustomerDetails: FC = (): ReactElement => {
  return (
    <Styled.CustomerDetails>
      <Customer />      
      <Password />
      <BillingAddress />
      <ShippingAddress /> 
      <CardDetails />     
    </Styled.CustomerDetails>
  )
}

export default CustomerDetails
