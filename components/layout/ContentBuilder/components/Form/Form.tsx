/* eslint-disable indent */
import React, { ReactElement, FC } from 'react'
import { useQuery } from '@apollo/client'
import { Formik } from 'formik'

import { formQuery } from '@queries/global/form'

import Heading from '@components/typography/Heading'
import Button from '@components/interactions/Button'
import CheckboxList from '@components/forms/CheckboxList'
import Select from '@components/forms/Select'
import TextField from '@components/forms/TextField'
import TextArea from '@components/forms/TextArea'

import * as Styled from './styles/Form.style'

import { FormProps } from './Form.types'
import RadioList from '@components/forms/RadioList'
import NameField from '@components/forms/NameField'

const Form: FC<FormProps> = ({ formId }: FormProps): ReactElement => {
  const { loading, data } = useQuery(formQuery(formId).query)

  // console.log(data)

  if (loading) return <div>Loading...</div>

  const initialValues = data && data.gfForm.formFields.nodes.reduce((acc, curr) => (
    acc[`input_${curr.id}`] = '', acc), {}
  )

  // console.log(initialValues)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {() => (
        <Styled.Form>
          {data && <Heading text={data.gfForm.title} size={3} font='ChronicleCondensed' />}
          {data && data.gfForm.formFields.nodes.map((formField, index) => {
            switch (formField.type) {
              case 'TEXT': {
                return (
                  <TextField key={index} {...formField} databaseId={data.gfForm.databaseId} />
                )
              }
              
              case 'TEXTAREA': {
                return (
                  <TextArea key={index} {...formField} databaseId={data.gfForm.databaseId} />
                )   
              }

              case 'SELECT': {
                return (
                  <Select key={index} {...formField} databaseId={data.gfForm.databaseId} />
                )   
              }

              case 'CHECKBOX': {
                return (
                  <CheckboxList key={index} {...formField} databaseId={data.gfForm.databaseId} />
                )
              }

              case 'RADIO': {
                return (
                  <RadioList key={index} {...formField} databaseId={data.gfForm.databaseId} />
                )
              }

              case 'NAME': {
                return (
                  <NameField key={index} {...formField} databaseId={data.gfForm.databaseId} />
                )
              }
            }
          })}
          <Button type='submit' text='Submit' />
        </Styled.Form>
      )}
    </Formik>
  )
}

export default Form
