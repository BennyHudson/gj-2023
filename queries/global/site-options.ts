import { gql } from '@apollo/client'

export const newsletterModalQuery = {
  query: gql`
    query newsletterModal {
      gjOptions {
        newsletterModal {
          modalNewsletter {
            title
            description
            image {
              sourceUrl
            }
          }
        }
      }
      gfForm(id: "342", idType: DATABASE_ID) {
        formFields {
          nodes {
            ... on EmailField {
              label
              placeholder
              id
              type
              labelPlacement
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
              label
              checkboxLabel
              id
              type
              labelPlacement
              isRequired
            }
          }
        }
        submitButton {
          text
        }
      }
    }
  `
}