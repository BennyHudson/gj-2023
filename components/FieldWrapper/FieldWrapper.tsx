import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faWarning } from '@fortawesome/pro-thin-svg-icons'

import Label from '../Label'

import * as Styled from './styles/FieldWrapper.style'

import { FieldWrapperProps } from './FieldWrapper.types'

const FieldWrapper: FC<FieldWrapperProps> = ({
  target,
  label,
  children,
  required = false,
  labelPlacement = 'TOP',
  validationMessage,
}: FieldWrapperProps): ReactElement => {
  return (
    <Styled.FieldWrapper labelPlacement={labelPlacement} validationMessage={!!validationMessage}>
      {validationMessage && (
        <Styled.ValidationMessage>
          <FontAwesomeIcon icon={faWarning as IconProp} />
          <span>{validationMessage}</span>
        </Styled.ValidationMessage>
      )}
      {labelPlacement !== 'HIDDEN' && <Label target={target} text={label} required={required} />}
      {children}
    </Styled.FieldWrapper>
  )
}

export default FieldWrapper
