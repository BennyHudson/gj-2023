import { gql } from '@apollo/client'

import type { FeaturedImage } from '@typings/FeaturedImage.types'
import type { FormFieldProps } from '@typings/FormField.types'

import { media } from '@queries/fragments/media'

export interface SiteOptions {
  gjOptions: {
    faviconImages: {
      favicons: {
        faviconLarge: FeaturedImage
        faviconMedium: FeaturedImage
        faviconSmall: FeaturedImage
      }
    }
    splitPageImages: {
      accountPage: FeaturedImage
      cartPage: FeaturedImage
      checkoutPage: FeaturedImage
      newsletterPage: FeaturedImage
      searchPage: FeaturedImage
    }
    newsletterModal: {
      modalNewsletter: {
        title: string
        description: string
        image: FeaturedImage
      }
      sectionNewsletter: {
        image: FeaturedImage
        imageAlt: FeaturedImage
      }
    }
  }
  gfForm: {
    title: string
    formFields: {
      nodes: FormFieldProps[]
    }
    submitButton: {
      text: string
    }
  }
}

export const siteOptionsQuery = {
  query: gql`
    query siteOptions {
      gjOptions {
        faviconImages {
          favicons {
            faviconLarge {
              ${media()}
            }
            faviconMedium {
              ${media()}
            }
            faviconSmall {
              ${media()}
            }
          }
        }
        splitPageImages {
          accountPage {
            ${media()}
          }
          cartPage {
            ${media()}
          }
          checkoutPage {
            ${media()}
          }
          newsletterPage {
            ${media()}
          }
          searchPage {
            ${media()}
          }
        }
        newsletterModal {
          modalNewsletter {
            title
            description
            image {
              ${media()}
            }
          }
          sectionNewsletter {
            image {
              ${media()}
            }
            imageAlt {
              ${media()}
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
