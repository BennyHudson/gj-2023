import { gql } from '@apollo/client'

export const page404Query = {
  query: gql`
    query page404Query {
      gjOptions {
        error404 {
          errorBackgroundImage {
            sourceUrl
          }
        }
      }
    }
  `
}