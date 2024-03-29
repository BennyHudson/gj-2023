import type { FC, ReactElement } from 'react'
import React from 'react'

import Cart from '@components/Cart'
import EditButton from '@components/EditButton'

import type { OrderSummaryProps } from './OrderSummary.types'
import CheckoutPanel from '../CheckoutPanel'

const OrderSummary: FC<OrderSummaryProps> = ({
  panelIndex,
  activePanel,
  setActivePanel,
  checkoutForm,
}: OrderSummaryProps): ReactElement => {
  return (
    <CheckoutPanel panelIndex={panelIndex} activePanel={activePanel} setActivePanel={setActivePanel} title='Order Summary'>
      <Cart viewOnly voucher={checkoutForm?.voucher} />
      <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
    </CheckoutPanel>
  )
}

export default OrderSummary
