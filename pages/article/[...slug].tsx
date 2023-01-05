import { FC, ReactElement, useContext, useEffect } from 'react'
import { gql } from '@apollo/client'

import client from '@lib/apollo-client'

import { getAllPosts } from '@lib/api'

import HeroImage from '@components/HeroImage'
import BannerAdvert from '@components/BannerAdvert'
import Masthead from '@components/Masthead'
import Section from '@components/Section'
import ContentGrid from '@components/ContentGrid'

import PageContext, { PageContextProps } from '@context/PageContext'

const Article: FC = ({ data }): ReactElement => {
  const articleContent = data.article

  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    if (!articleContent.categories) {
      setActiveNavElement(1)
      return
    }

    if (articleContent.categories.nodes.find(category => category.name === 'Video')) {
      setActiveNavElement(4)
      return
    }

    setActiveNavElement(1)
  }, [setActiveNavElement, articleContent])

  const homeLink = {
    title: 'Home',
    url: '/',
  }

  let categoryCrumbs = []
  if (articleContent.categories) {
    categoryCrumbs = articleContent.categories.nodes.map((category) => {
      return {
        title: category.name,
        url: category.uri,
      }
    })
  }

  const currentPage = {
    title: articleContent!.title,
    url: articleContent!.uri,
  }
  
  const breadcrumbs = [homeLink, ...categoryCrumbs, currentPage]

  return (
    <>
      {articleContent.featuredImage && <HeroImage featuredImage={articleContent.featuredImage.node.sourceUrl} />}
      <BannerAdvert />
      <Section>
        <Masthead
          title={articleContent.title}
          breadcrumbs={breadcrumbs}
          subtitle={articleContent.articleAcf?.standfirst}
        />
        <ContentGrid
          byline={{
            author: articleContent.author?.node.name,
            photographer: articleContent.byLineAdditional?.photographerName,
            additionalBylines: articleContent.byLineAdditional?.otherByLines,
            sponsoredPost: {
              logo: articleContent.sponsoredPost?.sponsorLogo?.sourceUrl,
              name: articleContent.sponsoredPost?.sponsorName,
              url: articleContent.sponsoredPost?.sponsorUrl,
              disableLink: articleContent.sponsoredPost?.sponsorDisableLink,
            },
          }}
          contentBuilder={articleContent.articleAcf.contentBuilder}
        />
      </Section>
    </>
  )
}

export default Article

export async function getStaticPaths() {
  const allArticles = await getAllPosts('article')
  // const allPosts = await getAllPosts('post')

  // const all = [...allArticles, ...allPosts]

  const paths = allArticles.map((article) => {
    if (!article) return
    if (!article.node) return
    return {
      params: {
        slug: [article.node.slug],
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const response = await client.query({
    query: gql`
      query articleQuery {
        article(id: "${slug}", idType: SLUG) {
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
          byLineAdditional {
            photographerName
            otherByLines {
              content
              title
            }
          }
          sponsoredPost {
            sponsorLogo {
              sourceUrl
            }
            sponsorDisableLink
            sponsorName
            sponsorUrl
          }
          categories {
            nodes {
              name
              uri
            }
          }
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
                formShortcode
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
    `,
  })

  return {
    props: {
      data: response.data,
    }
  }
}