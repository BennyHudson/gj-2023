/* eslint-disable indent */
import React, { ReactElement, FC } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import { Formik } from 'formik'

import Heading from '@components/Heading'
import Select from '@components/Select'
import TextField from '@components/TextField'

import * as Styled from './styles/Newsletter.style'

const Newsletter: FC = (): ReactElement => {
  // const form = useStaticQuery(graphql`
  //   query newsletterForm {
  //     wpGfForm(databaseId: {eq: 342}) {
  //       title
  //       formFields {
  //         nodes {
  //           ... on WpEmailField {
  //             label
  //             placeholder
  //             id
  //             type
  //             labelPlacement
  //           }
  //           ... on WpNameField {
  //             id
  //             type
  //             labelPlacement
  //             label
  //             inputs {
  //               id
  //               label
  //               choices {
  //                 text
  //                 value
  //               }
  //               placeholder
  //               isHidden
  //             }
  //           }
  //           ... on WpConsentField {
  //             label
  //             checkboxLabel
  //             id
  //             type
  //             labelPlacement
  //             isRequired
  //           }
  //         }
  //       }
  //       submitButton {
  //         text
  //       }
  //     }
  //   }
  // `)

  // const initialValues = form.wpGfForm.formFields.nodes.reduce((acc, curr) => (
  //   acc[`input_${curr.id}`] = '', acc), {}
  // )

  // return (
  //   <Formik
  //     initialValues={initialValues}
  //     onSubmit={(values) => {
  //       console.log(values)
  //     }}
  //   >
  //     <Styled.Newsletter>
  //       <Heading text={form.wpGfForm.title} size={3} font='ChronicleCondensed' noMargin />
  //       {form.wpGfForm.formFields.nodes.map((formField) => {
  //         switch (formField.type) {
  //           case 'NAME': {
  //             return (
  //               <Styled.NameFields>
  //                 {formField.inputs.map((input) => {
  //                   if (input.isHidden) return

  //                   if (input.choices) {
  //                     return (<Select {...input} databaseId={input.id} hideLabels={formField.labelPlacement === 'HIDDEN'} />)
  //                   }

  //                   return (<TextField {...input} databaseId={input.id} hideLabels={formField.labelPlacement === 'HIDDEN'} />)
  //                 })}
  //               </Styled.NameFields>
  //             )
  //           }

  //           case 'EMAIL': {
  //             return (<TextField {...formField} databaseId={formField.id} hideLabels={formField.labelPlacement === 'HIDDEN'} />)
  //           }
  //         }
  //       })}
  //     </Styled.Newsletter>
  //   </Formik>
  // )

  return (
    <>NEWSLETTER GOES HERE</>
  )
}

export default Newsletter
