import { gql } from '@apollo/client'
import { disableFragmentWarnings } from 'graphql-tag'

import { articleContent } from '@queries/fragments/articleContent'
import { giftContent } from '@queries/fragments/giftContent'

disableFragmentWarnings()

export const giftGuideContentQuery = {
  query: gql`
    ${articleContent}
    ${giftContent}
    query giftGuideContentQuery {
      page(id: "388680", idType: DATABASE_ID) {
        seo {
          breadcrumbs {
            text
            url
          }
          canonical
          cornerstone
          focuskw
          metaDesc
          metaKeywords
          metaRobotsNofollow
          metaRobotsNoindex
          opengraphAuthor
          opengraphDescription
          opengraphImage {
            sourceUrl
          }
          opengraphModifiedTime
          opengraphPublishedTime
          opengraphPublisher
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphUrl
          readingTime
          schema {
            articleType
            pageType
          }
          title
          twitterDescription
          twitterImage {
            sourceUrl
          }
          twitterTitle
        }
        pageGifting {
          featuredBrandsLink
          featuredBrandsTitle
          fieldGroupName
          ctaFirst {
            ... on Article {
              ... ArticleContent
            }
          }
          ctaSecond {
            ... on Article {
              ... ArticleContent
            }
          }
          ctaThird {
            ... on Article {
              ... ArticleContent
            }
          }
          featureGuidesMore {
            ... on Article {
              ... ArticleContent
            }
          }
          featuredBrands {
            image {
              sourceUrl
            }
            name
            link
          }
          featuredGuides {
            ... on Article {
              ... ArticleContent
            }
          }
          selectedProducts {
            fieldGroupName
            title
            gifts {
              ... on Gift {
                ... GiftContent
              }
            }
          }
          selectedProductsSecond {
            title
            gifts {
              ... on Gift {
                ... GiftContent
              }
            }
          }
        }
      }
    }
  `
}