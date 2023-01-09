import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/pro-light-svg-icons'

import FieldWrapper from '../FieldWrapper'

import * as Styled from './styles/Select.style'

import { SelectProps } from './Select.types'

const Select: FC<SelectProps> = ({
  target,
  label,
  isRequired,
  id,
  databaseId,
  choices,
  labelPlacement,
}: SelectProps): ReactElement => {
  return (
    <FieldWrapper target={target} label={label} required={isRequired} labelPlacement={labelPlacement}>
      <Styled.SelectWrapper>
        <Styled.Select name={`input_${id}`} id={`input_${databaseId}_${id}`} as='select'>
          {choices.map((choice, index) => {
            return (
              <option key={index} value={choice.value}>{choice.text}</option>
            )
          })}
        </Styled.Select>
        <Styled.IconWrapper>
          <FontAwesomeIcon icon={faAngleDown as IconProp} />
        </Styled.IconWrapper>
      </Styled.SelectWrapper>
    </FieldWrapper>
  )
}

export default Select
