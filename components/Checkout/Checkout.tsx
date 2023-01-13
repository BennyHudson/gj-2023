import React, { ReactElement, FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPenNib } from '@fortawesome/pro-thin-svg-icons'

import Heading from '@components/typography/Heading'
import EditButton from '@components/EditButton'

import * as Styled from './styles/Checkout.style'
import Button from '@components/interactions/Button'

const Checkout: FC = (): ReactElement => {
  const [ activePanel, setActivePanel ] = useState(1)
  return (
    <Styled.Checkout>
      <Styled.CheckoutPanels>
        <Styled.CheckoutPanel>
          <Styled.CheckoutHeader>
            <Heading size={2} font='ChronicleCondensed' text='1. Your Details' noMargin />
            {activePanel > 1 && <Styled.IconButton onClick={() => setActivePanel(1)}><FontAwesomeIcon icon={faPenNib as IconProp} /></Styled.IconButton>}
          </Styled.CheckoutHeader>
          {activePanel === 1 &&
            <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
          }
        </Styled.CheckoutPanel>
        <Styled.CheckoutPanel>
          <Styled.CheckoutHeader>
            <Heading size={2} font='ChronicleCondensed' text='2. Billing Details' noMargin />
            {activePanel > 2 && <Styled.IconButton onClick={() => setActivePanel(2)}><FontAwesomeIcon icon={faPenNib as IconProp} /></Styled.IconButton>}
          </Styled.CheckoutHeader>
          {activePanel === 2 &&
            <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
          }
        </Styled.CheckoutPanel>
        <Styled.CheckoutPanel>
          <Styled.CheckoutHeader>
            <Heading size={2} font='ChronicleCondensed' text='3. Shipping Details' noMargin />
            {activePanel > 3 && <Styled.IconButton onClick={() => setActivePanel(3)}><FontAwesomeIcon icon={faPenNib as IconProp} /></Styled.IconButton>}
          </Styled.CheckoutHeader>
          {activePanel === 3 &&
            <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
          }
        </Styled.CheckoutPanel>
        <Styled.CheckoutPanel>
          <Styled.CheckoutHeader>
            <Heading size={2} font='ChronicleCondensed' text='4. Order Summary' noMargin />
            {activePanel > 4 && <Styled.IconButton onClick={() => setActivePanel(4)}><FontAwesomeIcon icon={faPenNib as IconProp} /></Styled.IconButton>}
          </Styled.CheckoutHeader>
          {activePanel === 4 &&
            <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
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
      <Button onClick={() => console.log('hello')} text='Checkout Now' size={1} />
    </Styled.Checkout>
  )
}

export default Checkout
