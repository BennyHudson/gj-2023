import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Field } from 'formik'
import type { FC, ReactElement } from 'react'
import React from 'react'

import type { SelectProps } from './Select.types'
import * as Styled from './styles/Select.style'
import FieldWrapper from '../FieldWrapper'

const Select: FC<SelectProps> = ({ target, label, isRequired, id, choices, labelPlacement }: SelectProps): ReactElement => {
  return (
    <FieldWrapper target={target} label={label} required={isRequired} labelPlacement={labelPlacement} id={id}>
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
