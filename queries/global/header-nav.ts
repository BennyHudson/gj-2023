import { gql } from '@apollo/client'

import { articleContent, Article } from '@queries/fragments/articleContent'
import { houseNoteContent, HouseNote } from '@queries/fragments/houseNoteContent'
import { podcastContent, Podcast } from '@queries/fragments/podcastContent'

export interface HeaderNav {
  page: {
    subscriptionPage: {
      club: {
        clubhouseOffer?: string
      }
    }
  }
  menu: {
    menuItems: {
      nodes: {
        key: string
        label: string
        uri: string
        parentId: string
      }
    }
  }
  podcasts: {
    nodes: Podcast[]
  }
  houseNotes: {
    nodes: HouseNote[]
  }
  videos: {
    nodes: Article[]
  }
  sessions: {
    nodes: Article[]
  }
}

export const headerNavQuery = {
  query: gql`
    ${articleContent}
    ${houseNoteContent}
    ${podcastContent}
    query mainMenu {
      page(id: "74300", idType: DATABASE_ID) {
        subscriptionPage {
          club {
            clubhouseOffer
          }
        }
      }
      menu(id: "dGVybTo5MjQx") {
        menuItems(first: 1000) {
          nodes {
            key: id
            label
            uri
            parentId
          }
        }
      }
      podcasts(first: 4) {
        nodes {
          ...PodcastContent
        }
      }
      houseNotes(first: 4) {
        nodes {
          ...HouseNoteContent
        }
      }
      videos: articles(where: { categoryName: "Video" }, first: 4) {
        nodes {
          ...ArticleContent
        }
      }
      sessions: articles(where: { categoryName: "GJ Sessions" }, first: 4) {
        nodes {
          ...ArticleContent
        }
      }
    }
  `,
}
