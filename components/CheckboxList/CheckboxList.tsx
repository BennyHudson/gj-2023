import React, { ReactElement, FC } from 'react'
import { Field } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/pro-light-svg-icons'

import FieldWrapper from '@components/FieldWrapper'

import * as Styled from './styles/CheckboxList.style'

import { CheckboxListProps } from './CheckboxList.types'

const CheckboxList: FC<CheckboxListProps> = ({
  target,
  label,
  isRequired,
  hideLabels,
  choices,
  id,
}): ReactElement => {
  return (
    <FieldWrapper target={target} label={label} required={isRequired} hideLabels={hideLabels}>
      <Styled.CheckboxList>
        {choices.map((choice, index) => {
          return (
            <Styled.CheckboxLabel key={index}>
              <Field type='checkbox' value={choice.value} name={`input_${id}`} />
              <Styled.Checkbox>
                <FontAwesomeIcon icon={faCheck as IconProp} />
              </Styled.Checkbox>
              {choice.text}
            </Styled.CheckboxLabel>
          )
        })}
      </Styled.CheckboxList>
    </FieldWrapper>
  )
}

export default CheckboxList
