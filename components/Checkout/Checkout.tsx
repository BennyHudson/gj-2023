import React, { ReactElement, FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPenNib } from '@fortawesome/pro-thin-svg-icons'

import Heading from '@components/typography/Heading'
import EditButton from '@components/EditButton'

import * as Styled from './styles/Checkout.style'

const Checkout: FC = (): ReactElement => {
  const [ activePanel, setActivePanel ] = useState(1)
  return (
    <Styled.Checkout>
      <Styled.CheckoutPanels>
        <Styled.CheckoutPanel>
          <Styled.CheckoutHeader>
            <Heading size={2} font='ChronicleCondensed' text='1. Your Details' noMargin />
            <FontAwesomeIcon icon={faPenNib as IconProp} />
          </Styled.CheckoutHeader>
          {activePanel === 1 &&
            <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
          }
        </Styled.CheckoutPanel>
        <Styled.CheckoutPanel>
          <Styled.CheckoutHeader>
            <Heading size={2} font='ChronicleCondensed' text='2. Billing Details' noMargin />
            <FontAwesomeIcon icon={faPenNib as IconProp} />
          </Styled.CheckoutHeader>
          {activePanel === 2 &&
            <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
          }
        </Styled.CheckoutPanel>
        <Styled.CheckoutPanel>
          <Styled.CheckoutHeader>
            <Heading size={2} font='ChronicleCondensed' text='3. Shipping Details' noMargin />
            <FontAwesomeIcon icon={faPenNib as IconProp} />
          </Styled.CheckoutHeader>
          {activePanel === 3 &&
            <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
          }
        </Styled.CheckoutPanel>
        <Styled.CheckoutPanel>
          <Styled.CheckoutHeader>
            <Heading size={2} font='ChronicleCondensed' text='4. Order Summary' noMargin />
            <FontAwesomeIcon icon={faPenNib as IconProp} />
          </Styled.CheckoutHeader>
          {activePanel === 4 &&
            <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
          }
        </Styled.CheckoutPanel>
        <Styled.CheckoutPanel>
          <Styled.CheckoutHeader>
            <Heading size={2} font='ChronicleCondensed' text='5. Payment' noMargin />
            <FontAwesomeIcon icon={faPenNib as IconProp} />
          </Styled.CheckoutHeader>
          {activePanel === 5 &&
            <div>Payment</div>
          }
        </Styled.CheckoutPanel>
      </Styled.CheckoutPanels>
    </Styled.Checkout>
  )
}

export default Checkout
