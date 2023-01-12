import React, { ReactElement, FC, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/pro-thin-svg-icons'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/ContainedModal.style'

import { ContainedModalProps } from './ContainedModal.types'

const ContainedModal: FC<ContainedModalProps> = ({
  children,
}: ContainedModalProps): ReactElement => {
  const { setShowModal, headerHeight, showModal } = useContext(PageContext) as PageContextProps

  const variants = {
    out: {
      opacity: 0,
      zIndex: 0,
      y: -60,
      transition: {
        duration: 0.4
      }
    },
    in: {
      opacity: 1,
      zIndex: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2
      }
    }
  }

  return (
    <AnimatePresence initial={false} mode='wait'>
      <motion.div 
        key='containedModal'
        variants={variants}
        animate='in'
        initial='out'
        exit='out'
      >
        <Styled.ContainedModal headerHeight={headerHeight}>
          <Styled.CloseButton onClick={() => setShowModal(null)}>
            <FontAwesomeIcon icon={faTimes as IconProp} />
          </Styled.CloseButton>
          {children}
        </Styled.ContainedModal>
        {!!showModal && <Styled.HideOverflow />}
      </motion.div>
    </AnimatePresence>
  )
}

export default ContainedModal
