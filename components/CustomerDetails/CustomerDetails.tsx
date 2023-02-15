import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/CustomerDetails.style'

import BillingAddress from './components/BillingAddress'
import ShippingAddress from './components/ShippingAddress'
import Password from './components/Password'
import Customer from './components/Customer/Customer'

const CustomerDetails: FC = (): ReactElement => {
  return (
    <Styled.CustomerDetails>
      <Customer />      
      <Password />
      <BillingAddress />
      <ShippingAddress /> 
    </Styled.CustomerDetails>
  )
}

export default CustomerDetails
