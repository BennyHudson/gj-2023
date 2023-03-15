import { gql } from '@apollo/client'

export const siteOptionsQuery = {
  query: gql`
    query siteOptions {
      gjOptions {
        splitPageImages {
          accountPage {
            sourceUrl
          }
          cartPage {
            sourceUrl
          }
          checkoutPage {
            sourceUrl
          }
          newsletterPage {
            sourceUrl
          }
          searchPage {
            sourceUrl
          }
        }
        newsletterModal {
          modalNewsletter {
            title
            description
            image {
              sourceUrl
            }
          }
          sectionNewsletter {
            image {
              sourceUrl
            }
            imageAlt {
              sourceUrl
            }
          }
        }
      }
      gfForm(id: "342", idType: DATABASE_ID) {
        title
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
  `,
}
