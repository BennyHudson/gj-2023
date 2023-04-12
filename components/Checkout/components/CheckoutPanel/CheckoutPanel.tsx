import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPenNib } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'

import type { CheckoutPanelProps } from './CheckoutPanel.types'
import * as Styled from './styles/CheckoutPanel.style'

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
