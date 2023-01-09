import React, { ReactElement, FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import * as Styled from './styles/PageTransition.style'

import { PageTransitionProps } from './PageTransition.types'
import { useRouter } from 'next/router'

const PageTransition: FC<PageTransitionProps> = ({
  children
}: PageTransitionProps): ReactElement => {
  const { asPath } = useRouter()

  const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.75
      }
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.5
      }
    }
  }

  return (
    <Styled.PageTransition>
      <AnimatePresence initial={false} mode='wait'>
        <motion.div 
          key={asPath}
          variants={variants}
          animate='in'
          initial='out'
          exit='out'
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Styled.PageTransition>
  )
}

export default PageTransition
