import { gql } from '@apollo/client'

export const formQuery = (formId: number) => {
  return {
    query: gql`
      query formQuery {
        gfForm(id: "${formId}", idType: DATABASE_ID) {
          databaseId
          title
          isActive
          formFields {
            nodes {
              type
              id
              ... on TextField {
                label
                isRequired
                placeholder
                isPasswordInput
              }
              ... on EmailField {
                label
                isRequired
                placeholder
              }
              ... on TextAreaField {
                label
                isRequired
                placeholder
              }
              ... on SelectField {
                label
                isRequired
                choices {
                  value
                  text
                }
              }
              ... on CheckboxField {
                label
                isRequired
                description
                choices {
                  text
                  value
                }
              }
              ... on RadioField {
                label
                isRequired
                choices {
                  text
                  value
                }
              }
              ... on NameField {
                id
                type
                labelPlacement
                label
                inputs {
                  id
                  label
                  choices {
                    text
                    value
                  }
                  placeholder
                  isHidden
                }
              }
              ... on ConsentField {
                checkboxLabel
                description
              }
            }
          }
        }
      }
    `,
  }
}
