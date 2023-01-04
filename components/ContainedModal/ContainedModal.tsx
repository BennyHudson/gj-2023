import React, { ReactElement, FC, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/pro-light-svg-icons'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/ContainedModal.style'

import { ContainedModalProps } from './ContainedModal.types'

const ContainedModal: FC<ContainedModalProps> = ({
  children,
}: ContainedModalProps): ReactElement => {
  const { setShowModal, headerHeight, showModal } = useContext(PageContext) as PageContextProps
  return (
    <>
      <Styled.ContainedModal headerHeight={headerHeight}>
        <Styled.CloseButton onClick={() => setShowModal(null)}>
          <FontAwesomeIcon icon={faTimes as IconProp} />
        </Styled.CloseButton>
        {children}
      </Styled.ContainedModal>
      {!!showModal && <Styled.HideOverflow />}
    </>
  )
}

export default ContainedModal
