import { gql } from '@apollo/client'

export const partnerTypesQuery = {
  query: gql`
    query partnerQuery {
      restaurants: partnerType(id: "restaurants-bars", idType: SLUG) {
        partners(first: 100) {
          nodes {
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            clubhousePartners {
              partnerInformation {
                offer
              }
            }
          }
        }
      }
      clubs: partnerType(id: "clubs", idType: SLUG) {
        partners(first: 100) {
          nodes {
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            clubhousePartners {
              partnerInformation {
                offer
              }
            }
          }
        }
      }
      hotels: partnerType(id: "hotels", idType: SLUG) {
        partners(first: 100) {
          nodes {
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            clubhousePartners {
              partnerInformation {
                offer
              }
            }
          }
        }
      }
      fashion: partnerType(id: "fashion-brands", idType: SLUG) {
        partners(first: 100) {
          nodes {
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            clubhousePartners {
              partnerInformation {
                offer
              }
            }
          }
        }
      }
      lifestyle: partnerType(id: "lifestyle-brands", idType: SLUG) {
        partners(first: 100) {
          nodes {
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            clubhousePartners {
              partnerInformation {
                offer
              }
            }
          }
        }
      }
    }
  `
}