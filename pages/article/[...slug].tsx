import { FC, ReactElement, useContext, useEffect } from 'react'
import { gql } from '@apollo/client'
// import { useRouter } from 'next/router'

import client from '@lib/apollo-client'

import { getAllPosts } from '@lib/api'

import { articleContent } from '@queries/fragments/articleContent'

import HeroImage from '@components/HeroImage'
import BannerAdvert from '@components/BannerAdvert'
import Masthead from '@components/Masthead'
import Section from '@components/Section'
import ContentGrid from '@components/ContentGrid'
import FurtherReading from '@components/FurtherReading'

import PageContext, { PageContextProps } from '@context/PageContext'

const Article: FC = ({ data }): ReactElement => {
  // const router = useRouter()

  const articleData = data.article
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    if (!articleData.categories) {
      setActiveNavElement(1)
      return
    }

    if (articleData.categories.nodes.find(category => category.name === 'Video')) {
      setActiveNavElement(4)
      return
    }

    setActiveNavElement(1)
  }, [setActiveNavElement, articleData])

  // // If the page is not yet generated, this will be displayed
  // // initially until getStaticProps() finishes running
  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }

  const homeLink = {
    title: 'Home',
    url: '/',
  }

  let categoryCrumbs = []
  if (articleData.categories) {
    console.log('hello')
    categoryCrumbs = articleData.categories.nodes.map((category) => {
      console.log(category)
      return {
        title: category.name,
        url: category.uri,
      }
    })
  }

  const currentPage = {
    title: articleData!.title,
    url: articleData!.uri,
  }
  
  const breadcrumbs = [homeLink, ...categoryCrumbs, currentPage]

  return (
    <>
      {articleData.featuredImage && <HeroImage featuredImage={articleData.featuredImage.node.sourceUrl} />}
      <BannerAdvert />
      <Section>
        <Masthead
          title={articleData.title}
          breadcrumbs={breadcrumbs}
          subtitle={articleData.articleAcf?.standfirst}
        />
        <ContentGrid
          byline={{
            author: articleData.author?.node.name,
            photographer: articleData.byLineAdditional?.photographerName,
            additionalBylines: articleData.byLineAdditional?.otherByLines,
            sponsoredPost: {
              logo: articleData.sponsoredPost?.sponsorLogo?.sourceUrl,
              name: articleData.sponsoredPost?.sponsorName,
              url: articleData.sponsoredPost?.sponsorUrl,
              disableLink: articleData.sponsoredPost?.sponsorDisableLink,
            },
          }}
          contentBuilder={articleData.articleAcf.contentBuilder}
        />
        {articleData.categories?.nodes.length &&
          <>
            <FurtherReading
              articleId={articleData.id}
              category={articleData.categories.nodes[articleData.categories.nodes.length - 1].name}
            />
          </>
        }
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
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const response = await client.query({
    query: gql`
      ${articleContent}
      query articleQuery {
        article(id: "${slug}", idType: SLUG) {
          ... ArticleContent
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