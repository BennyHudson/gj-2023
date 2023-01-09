import React, { FC, ReactElement, useEffect, useContext } from 'react'
import { gql } from '@apollo/client'

import client from '@lib/apollo-client'
import { getAllPosts } from '@lib/api'

import { houseNoteContent } from '@queries/fragments/houseNoteContent'

import BannerAdvert from '@components/BannerAdvert'

import PageContext, { PageContextProps } from '@context/PageContext'
import HeroImage from '@components/HeroImage'
import Section from '@components/Section'
import Masthead from '@components/Masthead'
import ContentGrid from '@components/ContentGrid'
import HeadTags from '@components/HeadTags'

const Podcast: FC = ({ pageData }): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(5)
  }, [setActiveNavElement])

  return (
    <>
      <HeadTags seo={pageData.seo} />
      <HeroImage featuredImage={pageData.featuredImage.node.sourceUrl} />
      <BannerAdvert />
      <Section>
        <Masthead 
          title={pageData.title} 
          subtitle={pageData.articleType.articleTypeLandingPageExcerpt} 
          fullWidth={false} 
          author={pageData.author.node.name}
        />
        <ContentGrid
          contentBuilder={pageData.articleAcf.contentBuilder}
          contentBuilderPrefix='HouseNote_Articleacf_ContentBuilder'
        />
      </Section>
    </>
  )
}

export default Podcast

export async function getStaticPaths() {
  const allHouseNotes = await getAllPosts('houseNote')

  const paths = allHouseNotes.map((houseNote) => {
    if (!houseNote) return
    if (!houseNote.node) return
    return {
      params: {
        slug: [houseNote.node.slug],
      }
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const response = await client.query({
    query: gql`
      ${houseNoteContent}
      query houseNoteQuery {
        gjOptions {
          articleNote {
            content
            image {
              sourceUrl
            }
            link {
              title
              url
            }
          }
        }
        houseNote(id: "${slug}", idType: SLUG) {
          ... HouseNoteContent
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
          articleAcf {
            contentBuilder {
              ... on HouseNote_Articleacf_ContentBuilder_Heading {
                heading
                pull
                selectHeadingType
                fieldGroupName
              }
              ... on HouseNote_Articleacf_ContentBuilder_Paragraph {
                fieldGroupName
                paragraph
                pull
              }
              ... on HouseNote_Articleacf_ContentBuilder_Blockquote {
                text
                fieldGroupName
              }
              ... on HouseNote_Articleacf_ContentBuilder_Image {
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
              ... on HouseNote_Articleacf_ContentBuilder_VideoEmbed {
                fieldGroupName
                videoEmbed
                videoThumb {
                  sourceUrl
                }
              }
              ... on HouseNote_Articleacf_ContentBuilder_ImageGallery {
                fieldGroupName
                type
                gallery {
                  sourceUrl
                  caption
                }
              }
              ... on HouseNote_Articleacf_ContentBuilder_MasonryGallery {
                fieldGroupName
                gallery {
                  caption
                  sourceUrl
                }
              }
              ... on HouseNote_Articleacf_ContentBuilder_ImageSlider {
                fieldGroupName
                slider {
                  caption
                  sourceUrl
                }
              }
              ... on HouseNote_Articleacf_ContentBuilder_List {
                fieldGroupName
                listTitle
                list {
                  listItem
                }
              }
              ... on HouseNote_Articleacf_ContentBuilder_CodeSnippet {
                adCode
                fieldGroupName
              }
              ... on HouseNote_Articleacf_ContentBuilder_RecommendedProducts {
                fieldGroupName
                recommendedProducts {
                  ... on SubscriptionProduct {
                    id
                    name
                  }
                }
              }
              ... on HouseNote_Articleacf_ContentBuilder_AffiliateProducts {
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
              ... on HouseNote_Articleacf_ContentBuilder_SingleAffiliate {
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
              ... on HouseNote_Articleacf_ContentBuilder_ButtonInfoBlock {
                callToAction
                fieldGroupName
                image {
                  caption
                  sourceUrl
                }
                link
                title
              }
              ... on HouseNote_Articleacf_ContentBuilder_AffiliateButton {
                fieldGroupName
                text
                url
              }
              ... on HouseNote_Articleacf_ContentBuilder_CompetitionForm {
                fieldGroupName
                gravityForm
              }
              ... on HouseNote_Articleacf_ContentBuilder_Heading2 {
                fieldGroupName
                heading2
              }
              ... on HouseNote_Articleacf_ContentBuilder_Heading3 {
                fieldGroupName
                heading3
              }
              ... on HouseNote_Articleacf_ContentBuilder_MediaAndText {
                alignment
                fieldGroupName
                gallery {
                  caption
                  sourceUrl
                }
              }
              ... on HouseNote_Articleacf_ContentBuilder_PodcastPlayer {
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
    `,
  })
      
  return {
    props: {
      pageData: response.data.houseNote,
    }
  }
}