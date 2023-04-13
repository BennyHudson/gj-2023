import { Field } from 'formik'
import type { FC, ReactElement } from 'react'
import React from 'react'

import FieldWrapper from '@components/FieldWrapper'

import type { RadioListProps } from './RadioList.types'
import * as Styled from './styles/RadioList.style'

const RadioList: FC<RadioListProps> = ({ target, label, isRequired, hideLabels, choices, id }): ReactElement => {
  return (
    <FieldWrapper target={target} label={label} required={isRequired} hideLabels={hideLabels} id={id}>
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
