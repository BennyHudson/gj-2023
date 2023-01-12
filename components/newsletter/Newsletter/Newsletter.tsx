import React, { ReactElement, FC } from 'react'
import { Formik } from 'formik'

import Heading from '@components/typography/Heading'
import TextField from '@components/forms/TextField'
import NameField from '@components/forms/NameField'

import * as Styled from './styles/Newsletter.style'
import Button from '@components/interactions/Button'

const Newsletter: FC = ({ form }): ReactElement => {

  const initialValues = form.formFields.nodes.reduce((acc, curr) => (
    acc[`input_${curr.id}`] = '', acc), {}
  )

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Styled.Newsletter>
        <Heading text={form.title} size={3} font='ChronicleCondensed' noMargin />
        {form.formFields.nodes.map((formField, index) => {
          switch (formField.type) {
          case 'NAME': {
            return (
              <NameField key={index} {...formField} databaseId={formField.id} />
            )
          }

          case 'EMAIL': {
            return (<TextField key={index} {...formField} databaseId={formField.id} />)
          }
          }
        })}
        <Button type='submit' text={form.submitButton.text} />
      </Styled.Newsletter>
    </Formik>
  )
}

export default Newsletter
