import type { FC, ReactElement } from 'react'
import React from 'react'

import FieldWrapper from '@components/FieldWrapper'
import Select from '@components/Select'
import TextField from '@components/TextField'

import type { NameFieldProps } from './NameField.types'
import * as Styled from './styles/NameField.style'

const NameField: FC<NameFieldProps> = ({ inputs, label, validationMessage, split = 'even', target, id, labelPlacement = 'TOP' }: NameFieldProps): ReactElement => {
  const visibleColumns = inputs.filter((input) => !input.isHidden)

  return (
    <FieldWrapper target={target} id={id} label={label} labelPlacement={labelPlacement} validationMessage={validationMessage}>
      <Styled.NameFields columnCount={visibleColumns.length} split={split}>
        {inputs.map((input, index) => {
          if (input.isHidden) return

          if (input.choices) {
            return <Select {...input} choices={input.choices} key={index} labelPlacement={labelPlacement === 'HIDDEN' ? 'HIDDEN' : 'BOTTOM'} />
          }

          return <TextField {...input} key={index} labelPlacement={labelPlacement === 'HIDDEN' ? 'HIDDEN' : 'BOTTOM'} />
        })}
      </Styled.NameFields>
    </FieldWrapper>
  )
}

export default NameField
