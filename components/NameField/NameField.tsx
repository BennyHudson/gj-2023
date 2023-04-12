import type { FC, ReactElement } from 'react'
import React from 'react'

import FieldWrapper from '@components/FieldWrapper'
import Select from '@components/Select'
import TextField from '@components/TextField'

import type { NameFieldProps } from './NameField.types'
import * as Styled from './styles/NameField.style'

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
