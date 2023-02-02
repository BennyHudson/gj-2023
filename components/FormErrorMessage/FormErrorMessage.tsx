import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faWarning } from '@fortawesome/pro-thin-svg-icons'

import Heading from '@components/Heading'

import * as Styled from './styles/FormErrorMessage.style'

const FormErrorMessage: FC = (): ReactElement => {
  return (
    <Styled.FormErrorMessage>
      <FontAwesomeIcon icon={faWarning as IconProp} />
      <Heading text='There were errors with your submission, please check below for details' size={1} font='Cera' state='error' />
    </Styled.FormErrorMessage>
  )
}

export default FormErrorMessage
