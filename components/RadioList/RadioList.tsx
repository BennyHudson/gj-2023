import React, { ReactElement, FC } from 'react'
import { Field } from 'formik'

import * as Styled from './styles/RadioList.style'

import { RadioListProps } from './RadioList.types'
import FieldWrapper from '@components/FieldWrapper'

const RadioList: FC<RadioListProps> = ({ target, label, isRequired, hideLabels, choices, id }): ReactElement => {
  return (
    <FieldWrapper target={target} label={label} required={isRequired} hideLabels={hideLabels}>
      <Styled.RadioList>
        {choices.map((choice, index) => {
          return (
            <Styled.RadioLabel key={index}>
              <Field type='radio' value={choice.value} name={`input_${id}`} />
              <Styled.Radio>
                <Styled.Selected />
              </Styled.Radio>
              {choice.text}
            </Styled.RadioLabel>
          )
        })}
      </Styled.RadioList>
    </FieldWrapper>
  )
}

export default RadioList
