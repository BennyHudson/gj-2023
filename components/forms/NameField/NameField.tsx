import React, { ReactElement, FC } from 'react'

import Select from '@components/forms/Select'
import TextField from '@components/forms/TextField'

import * as Styled from './styles/NameField.style'

import { NameFieldProps } from './NameField.types'
import FieldWrapper from '@components/forms/FieldWrapper'

const NameField: FC<NameFieldProps> = (props: NameFieldProps): ReactElement => {
  return (
    <FieldWrapper label={props.label}>
      <Styled.NameFields>
        {props.inputs.map((input, index) => {
          if (input.isHidden) return

          if (input.choices) {
            return (<Select {...input} key={index} databaseId={input.id} labelPlacement={props.labelPlacement} />)
          }

          return (<TextField {...input} key={index} databaseId={input.id} labelPlacement={props.labelPlacement} />)
        })}
      </Styled.NameFields>
    </FieldWrapper>
  )
}

export default NameField