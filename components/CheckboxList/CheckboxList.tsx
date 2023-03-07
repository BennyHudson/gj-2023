import React, { ReactElement, FC } from 'react'
import { Field } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/pro-thin-svg-icons'

import FieldWrapper from '@components/FieldWrapper'

import * as Styled from './styles/CheckboxList.style'

import { CheckboxListProps } from './CheckboxList.types'
import RawHtmlWrapper from '@components/RawHtmlWrapper'

const CheckboxList: FC<CheckboxListProps> = ({
  target,
  label,
  isRequired,
  hideLabels,
  choices,
  id,
  labelPlacement,
  validationMessage,
  description,
}): ReactElement => {
  return (
    <>
      <FieldWrapper
        target={target}
        label={label}
        required={isRequired}
        hideLabels={hideLabels}
        labelPlacement={labelPlacement}
        validationMessage={validationMessage}
      >
        <Styled.CheckboxList>
          {choices.map((choice, index) => {
            return (
              <Styled.CheckboxLabel key={index}>
                <Field type='checkbox' value={choice.value} name={`input_${id}`} />
                <Styled.Checkbox>
                  <FontAwesomeIcon icon={faCheck as IconProp} />
                </Styled.Checkbox>
                <RawHtmlWrapper content={choice.text} />
              </Styled.CheckboxLabel>
            )
          })}
        </Styled.CheckboxList>
      </FieldWrapper>
      {description && <Styled.Terms>{description}</Styled.Terms>}
    </>
  )
}

export default CheckboxList
