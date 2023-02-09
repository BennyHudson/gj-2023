import React, { ReactElement, FC } from 'react'

import Cart from '@components/Cart'
import EditButton from '@components/EditButton'

import { OrderSummaryProps } from './OrderSummary.types'
import CheckoutPanel from '../CheckoutPanel'

const OrderSummary: FC<OrderSummaryProps> = ({
  panelIndex,
  activePanel,
  setActivePanel,
}: OrderSummaryProps): ReactElement => {
  return (
    <CheckoutPanel panelIndex={panelIndex} activePanel={activePanel} setActivePanel={setActivePanel} title='Order Summary'> 
      <Cart viewOnly />
      <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
    </CheckoutPanel>
  )
}

export default OrderSummary
