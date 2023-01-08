/* eslint-disable indent */
import React, { ReactElement, FC } from 'react'
import { useQuery } from '@apollo/client'
import { Formik } from 'formik'

import { formQuery } from '@queries/global/form'

import Heading from '@components/Heading'
import Button from '@components/Button'
import CheckboxList from '@components/CheckboxList'
import Select from '@components/Select'
import TextField from '@components/TextField'
import TextArea from '@components/TextArea'

import * as Styled from './styles/Form.style'

import { FormProps } from './Form.types'
import RadioList from '@components/RadioList'
import NameField from '@components/NameField'

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
                  <TextField {...formField} databaseId={data.gfForm.databaseId} />
                )
              }
              
              case 'TEXTAREA': {
                return (
                  <TextArea {...formField} databaseId={data.gfForm.databaseId} />
                )   
              }

              case 'SELECT': {
                return (
                  <Select {...formField} databaseId={data.gfForm.databaseId} />
                )   
              }

              case 'CHECKBOX': {
                return (
                  <CheckboxList {...formField} databaseId={data.gfForm.databaseId} />
                )
              }

              case 'RADIO': {
                return (
                  <RadioList {...formField} databaseId={data.gfForm.databaseId} />
                )
              }

              case 'NAME': {
                return (
                  <NameField {...formField} databaseId={data.gfForm.databaseId} />
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
