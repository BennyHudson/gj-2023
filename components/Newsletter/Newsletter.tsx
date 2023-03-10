import React, { ReactElement, FC, useState } from 'react'
import { Formik } from 'formik'

import Title from '@components/Title'
import TextField from '@components/TextField'
import NameField from '@components/NameField'
import CheckboxList from '@components/CheckboxList'

import * as Styled from './styles/Newsletter.style'
import Button from '@components/Button'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import FormErrorMessage from '@components/FormErrorMessage'

const Newsletter: FC = ({ form, showTitle = true }): ReactElement => {
  const [confirmationMessage, setConfirmationMessage] = useState()
  const [validationMessages, setValidationMessages] = useState({ 3: undefined, 4: undefined, 5: undefined })
  const [isValid, setIsValid] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <Formik
      initialValues={{
        input_3: {
          2: '',
          3: '',
          6: '',
        },
        input_4: '',
      }}
      onSubmit={async (values) => {
        setIsSubmitting(true)

        const formResponse = await fetch('api/forms/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })
        const response = await formResponse.json()

        setIsSubmitting(false)
        setIsValid(response.is_valid)

        if (response.status === 200) {
          setConfirmationMessage(response.confirmation_message)
          return
        }

        setValidationMessages(response.validation_messages)
      }}
    >
      <Styled.Newsletter $isSubmitting={isSubmitting} $isValid={isValid}>
        {confirmationMessage ? (
          <RawHtmlWrapper content={confirmationMessage} />
        ) : (
          <>
            {showTitle && <Title title={form.title} />}
            {!isValid && <FormErrorMessage />}
            {form.formFields.nodes.map((formField, index) => {
              switch (formField.type) {
              case 'NAME': {
                return <NameField key={index} {...formField} validationMessage={validationMessages[3]} />
              }

              case 'EMAIL': {
                return <TextField key={index} {...formField} validationMessage={validationMessages[4]} />
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
                    validationMessage={validationMessages[5]}
                  />
                )
              }
              }
            })}
            <Button type='submit' text={form.submitButton.text} />
          </>
        )}
      </Styled.Newsletter>
    </Formik>
  )
}

export default Newsletter
