/* eslint-disable indent */
import React, { ReactElement, FC, useState } from 'react'
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
import RawHtmlWrapper from '@components/RawHtmlWrapper'

const Form: FC<FormProps> = ({ formId }: FormProps): ReactElement => {
  const { loading, data } = useQuery(formQuery(formId).query)

  const initialValues = data && data.gfForm.formFields.nodes.reduce((acc, curr) => ((acc[`input_${curr.id}`] = ''), acc), {})

  const [confirmationMessage, setConfirmationMessage] = useState()
  const [validationMessages, setValidationMessages] = useState({})
  // const [isValid, setIsValid] = useState(true)
  // const [isSubmitting, setIsSubmitting] = useState(false)

  if (loading) return <div>Loading...</div>

  if (confirmationMessage) {
    return (
      <Styled.ConfirmationMessage>
        <RawHtmlWrapper content={confirmationMessage} />
      </Styled.ConfirmationMessage>
    )
  }

  if (data && !data.gfForm.isActive) {
    return (
      <Styled.ConfirmationMessage>
        <RawHtmlWrapper content={'<p>This competition is now closed.</p>'} />
      </Styled.ConfirmationMessage>
    )
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        // setIsSubmitting(true)

        const formResponse = await fetch(`/api/forms/${formId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })

        const response = await formResponse.json()

        // setIsSubmitting(false)
        // setIsValid(response.is_valid)

        if (response.status === 200) {
          setConfirmationMessage(response.confirmation_message)
          return
        }

        setValidationMessages(response.validation_messages)
      }}
    >
      {() => (
        <Styled.Form>
          {data && <Heading text={data.gfForm.title} size={3} font='ChronicleCondensed' />}
          {data &&
            data.gfForm.formFields.nodes.map((formField, index) => {
              switch (formField.type) {
                case 'TEXT': {
                  return (
                    <TextField
                      key={index}
                      {...formField}
                      databaseId={data.gfForm.databaseId}
                      validationMessage={validationMessages?.[index + 1]}
                    />
                  )
                }

                case 'EMAIL': {
                  return (
                    <TextField
                      key={index}
                      {...formField}
                      databaseId={data.gfForm.databaseId}
                      type='email'
                      validationMessage={validationMessages?.[index + 1]}
                    />
                  )
                }

                case 'TEXTAREA': {
                  return (
                    <TextArea
                      key={index}
                      {...formField}
                      databaseId={data.gfForm.databaseId}
                      validationMessage={validationMessages?.[index + 1]}
                    />
                  )
                }

                case 'SELECT': {
                  return (
                    <Select
                      key={index}
                      {...formField}
                      databaseId={data.gfForm.databaseId}
                      validationMessage={validationMessages?.[index + 1]}
                    />
                  )
                }

                case 'CHECKBOX': {
                  return (
                    <CheckboxList
                      key={index}
                      {...formField}
                      databaseId={data.gfForm.databaseId}
                      validationMessage={validationMessages?.[index + 1]}
                    />
                  )
                }

                case 'RADIO': {
                  return (
                    <RadioList
                      key={index}
                      {...formField}
                      databaseId={data.gfForm.databaseId}
                      validationMessage={validationMessages?.[index + 1]}
                    />
                  )
                }

                case 'NAME': {
                  return (
                    <NameField
                      key={index}
                      {...formField}
                      databaseId={data.gfForm.databaseId}
                      validationMessage={validationMessages?.[index + 1]}
                    />
                  )
                }

                case 'CONSENT': {
                  return (
                    <CheckboxList
                      key={index}
                      {...formField}
                      choices={[
                        {
                          value: '1',
                          text: formField.checkboxLabel,
                        },
                      ]}
                      validationMessage={validationMessages?.[index + 1]}
                    />
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
