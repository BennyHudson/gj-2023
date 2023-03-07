import React, { ReactElement, FC } from 'react'

import Select from '@components/Select'
import TextField from '@components/TextField'

import * as Styled from './styles/NameField.style'

import { NameFieldProps } from './NameField.types'
import FieldWrapper from '@components/FieldWrapper'

const NameField: FC<NameFieldProps> = (props: NameFieldProps): ReactElement => {
  const visibleColumns = props.inputs.filter((input) => !input.isHidden)

  return (
    <FieldWrapper label={props.label} labelPlacement='TOP' validationMessage={props.validationMessage}>
      <Styled.NameFields columnCount={visibleColumns.length} split={props.split}>
        {props.inputs.map((input, index) => {
          if (input.isHidden) return

          if (input.choices) {
            return <Select {...input} key={index} labelPlacement='BOTTOM' />
          }

          return <TextField {...input} key={index} labelPlacement='BOTTOM' />
        })}
      </Styled.NameFields>
    </FieldWrapper>
  )
}

export default NameField
