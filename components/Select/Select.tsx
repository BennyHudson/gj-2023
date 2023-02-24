import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/pro-light-svg-icons'
import { Field } from 'formik'

import FieldWrapper from '../FieldWrapper'

import * as Styled from './styles/Select.style'

import { SelectProps } from './Select.types'

const Select: FC<SelectProps> = ({ target, label, isRequired, id, choices, labelPlacement }: SelectProps): ReactElement => {
  return (
    <FieldWrapper target={target} label={label} required={isRequired} labelPlacement={labelPlacement}>
      <Styled.SelectWrapper>
        <Field className='styled-select' as='select' name={typeof id === 'number' ? `input_${id}` : id}>
          {choices.map((choice, index) => {
            return (
              <option key={index} value={choice.value}>
                {choice.text}
              </option>
            )
          })}
        </Field>
        <Styled.IconWrapper>
          <FontAwesomeIcon icon={faAngleDown as IconProp} />
        </Styled.IconWrapper>
      </Styled.SelectWrapper>
    </FieldWrapper>
  )
}

export default Select
