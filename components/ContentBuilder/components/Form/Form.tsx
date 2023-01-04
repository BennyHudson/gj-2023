/* eslint-disable indent */
import React, { ReactElement, FC } from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
import { Formik } from 'formik'

import Button from '@components/Button'
import CheckboxList from '@components/CheckboxList'
import Select from '@components/Select'
import TextField from '@components/TextField'
import TextArea from '@components/TextArea'

import * as Styled from './styles/Form.style'

const Form: FC = (): ReactElement => {
  // const form = useStaticQuery(graphql`
  //   query formQuery {
  //     wpGfForm(databaseId: {eq: 342}) {
  //       databaseId
  //       formFields {
  //         nodes {
  //           type
  //           id
  //           ... on WpTextField {
  //             label
  //             isRequired
  //             placeholder
  //             isPasswordInput
  //           }
  //           ... on WpTextAreaField {
  //             label
  //             isRequired
  //             placeholder
  //           }
  //           ... on WpSelectField {
  //             label
  //             isRequired
  //             choices {
  //               value
  //               text
  //             }
  //           }
  //           ... on WpCheckboxField {
  //             label
  //             isRequired
  //             choices {
  //               text
  //               value
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { formFields, databaseId } = form.wpGfForm 

  // const initialValues = formFields.nodes.reduce((acc, curr) => (
  //   acc[`input_${curr.id}`] = '', acc), {}
  // )

  // console.log(formFields.nodes)

  return (
    <Formik
      initialValues={{
        1: '',
      }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {() => (
        <Styled.Form>
          {/* {formFields.nodes.map((formField, index) => {
            switch (formField.type) {
              case 'TEXT': {
                return (
                  <TextField {...formField} databaseId={databaseId} />
                )
              }
              
              case 'TEXTAREA': {
                return (
                  <TextArea {...formField} databaseId={databaseId} />
                )   
              }

              case 'SELECT': {
                return (
                  <Select {...formField} databaseId={databaseId} />
                )   
              }

              case 'CHECKBOX': {
                return (
                  <CheckboxList {...formField} databaseId={databaseId} />
                )
              }
            }
          })}
          <Button type='submit' text='Submit' /> */}
        </Styled.Form>
      )}
    </Formik>
  )
}

export default Form
