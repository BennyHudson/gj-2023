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
    }
  `
}