import React, { ReactElement, FC, useState } from 'react'

import Heading from '@components/typography/Heading'
import EditButton from '@components/EditButton'

import * as Styled from './styles/Checkout.style'

const Checkout: FC = (): ReactElement => {
  const [ activePanel, setActivePanel ] = useState(1)
  return (
    <Styled.Checkout>
      <Heading size={5} text='Checkout' font='ChronicleCondensed' />
      <Styled.CheckoutPanels>
        <Styled.CheckoutPanel>
          <Heading size={2} font='ChronicleCondensed' text='1. Your Details' />
          {activePanel === 1 &&
            <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
          }
        </Styled.CheckoutPanel>
        <Styled.CheckoutPanel>
          <Heading size={2} font='ChronicleCondensed' text='2. Billing Details' />
          {activePanel === 2 &&
            <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
          }
        </Styled.CheckoutPanel>
        <Styled.CheckoutPanel>
          <Heading size={2} font='ChronicleCondensed' text='3. Shipping Details' />
          {activePanel === 3 &&
            <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
          }
        </Styled.CheckoutPanel>
        <Styled.CheckoutPanel>
          <Heading size={2} font='ChronicleCondensed' text='4. Order Summary' />
          {activePanel === 4 &&
            <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
          }
        </Styled.CheckoutPanel>
        <Styled.CheckoutPanel>
          <Heading size={2} font='ChronicleCondensed' text='5. Payment' />
          {activePanel === 5 &&
            <div>Payment</div>
          }
        </Styled.CheckoutPanel>
      </Styled.CheckoutPanels>
    </Styled.Checkout>
  )
}

export default Checkout
