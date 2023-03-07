import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPenNib } from '@fortawesome/pro-thin-svg-icons'

import Heading from '@components/Heading'

import * as Styled from './styles/CheckoutPanel.style'

import { CheckoutPanelProps } from './CheckoutPanel.types'

const CheckoutPanel: FC<CheckoutPanelProps> = ({
  panelIndex,
  activePanel,
  title,
  children,
  setActivePanel,
}: CheckoutPanelProps): ReactElement => {
  return (
    <Styled.CheckoutPanel>
      <Styled.CheckoutHeader>
        <Heading size={2} font='ChronicleCondensed' text={`${panelIndex}. ${title}`} noMargin />
        {activePanel > panelIndex && (
          <Styled.IconButton onClick={() => setActivePanel(panelIndex)}>
            <FontAwesomeIcon icon={faPenNib as IconProp} /> Edit
          </Styled.IconButton>
        )}
      </Styled.CheckoutHeader>
      {activePanel === panelIndex && children}
    </Styled.CheckoutPanel>
  )
}

export default CheckoutPanel
