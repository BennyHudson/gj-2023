import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'
import { bylineContent } from '@queries/fragments/bylineContent'

export const articleBody = (slug: string) => {
  return {
    query: gql`
      ${articleContent}
      ${bylineContent}
      query articleQuery {
        article(id: "${slug}", idType: SLUG) {
          ... ArticleContent
          ... BylineContent
          articleAcf {
            standfirst
            featuredMedia
            featuredVideo
            contentBuilder {
              ... on Article_Articleacf_ContentBuilder_Heading {
                heading
                pull
                selectHeadingType
                fieldGroupName
              }
              ... on Article_Articleacf_ContentBuilder_Paragraph {
                fieldGroupName
                paragraph
                pull
              }
              ... on Article_Articleacf_ContentBuilder_Blockquote {
                text
                fieldGroupName
              }
              ... on Article_Articleacf_ContentBuilder_Image {
                fieldGroupName
                image {
                  sourceUrl
                  caption
                }
                hasLink
                imageSize
                internalExternal
                externalLink
                internalLink {
                  ... on Article {
                    id
                    uri
                  }
                  ... on Post {
                    id
                    uri
                  }
                  ... on Page {
                    id
                    uri
                  }
                }
              }
              ... on Article_Articleacf_ContentBuilder_VideoEmbed {
                fieldGroupName
                videoEmbed
                videoThumb {
                  sourceUrl
                }
              }
              ... on Article_Articleacf_ContentBuilder_ImageGallery {
                fieldGroupName
                type
                gallery {
                  sourceUrl
                  caption
                }
              }
              ... on Article_Articleacf_ContentBuilder_MasonryGallery {
                fieldGroupName
                gallery {
                  caption
                  sourceUrl
                }
              }
              ... on Article_Articleacf_ContentBuilder_ImageSlider {
                fieldGroupName
                slider {
                  caption
                  sourceUrl
                }
              }
              ... on Article_Articleacf_ContentBuilder_List {
                fieldGroupName
                listTitle
                list {
                  listItem
                }
              }
              ... on Article_Articleacf_ContentBuilder_CodeSnippet {
                adCode
                fieldGroupName
              }
              ... on Article_Articleacf_ContentBuilder_RecommendedProducts {
                fieldGroupName
                recommendedProducts {
                  ... on SubscriptionProduct {
                    id
                    name
                  }
                }
              }
              ... on Article_Articleacf_ContentBuilder_AffiliateProducts {
                fieldGroupName
                affiliateProducts {
                  urlButtonText
                  title
                  text
                  price
                  affiliateLink
                  image {
                    caption
                    sourceUrl
                  }
                }
              }
              ... on Article_Articleacf_ContentBuilder_SingleAffiliate {
                description
                fieldGroupName
                link
                price
                title
                image {
                  caption
                  sourceUrl
                }
              }
              ... on Article_Articleacf_ContentBuilder_ButtonInfoBlock {
                callToAction
                fieldGroupName
                image {
                  caption
                  sourceUrl
                }
                link
                title
              }
              ... on Article_Articleacf_ContentBuilder_AffiliateButton {
                fieldGroupName
                text
                url
              }
              ... on Article_Articleacf_ContentBuilder_CompetitionForm {
                fieldGroupName
                gravityForm
              }
              ... on Article_Articleacf_ContentBuilder_Heading2 {
                fieldGroupName
                heading2
              }
              ... on Article_Articleacf_ContentBuilder_Heading3 {
                fieldGroupName
                heading3
              }
              ... on Article_Articleacf_ContentBuilder_MediaAndText {
                alignment
                fieldGroupName
                gallery {
                  caption
                  sourceUrl
                }
              }
              ... on Article_Articleacf_ContentBuilder_PodcastPlayer {
                fieldGroupName
                title
                source {
                  ... on Podcast {
                    id
                    podcasts {
                      podcastMeta {
                        media {
                          audio
                        }
                        guest {
                          name
                          about
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  }
}