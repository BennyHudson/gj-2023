import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faWarning } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement } from 'react'
import React from 'react'

import type { FieldWrapperProps } from './FieldWrapper.types'
import * as Styled from './styles/FieldWrapper.style'
import Label from '../Label'

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
      {labelPlacement !== 'HIDDEN' && <Label target={target as string} text={label} required={required} />}
      {children}
    </Styled.FieldWrapper>
  )
}

export default FieldWrapper
