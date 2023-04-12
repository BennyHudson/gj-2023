import type { FC, ReactElement } from 'react'
import React from 'react'

import BillingAddress from './components/BillingAddress'
import Customer from './components/Customer/Customer'
import Password from './components/Password'
import ShippingAddress from './components/ShippingAddress'
import * as Styled from './styles/CustomerDetails.style'

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
