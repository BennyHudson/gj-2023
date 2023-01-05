import { gql } from '@apollo/client'

import { articleContent } from '@queries/fragments/articleContent'
import { houseNoteContent } from '@queries/fragments/houseNoteContent'
import { podcastContent } from '@queries/fragments/podcastContent'

export const headerNavQuery = {
  query: gql`
    ${articleContent}
    ${houseNoteContent}
    ${podcastContent}
    query mainMenu {
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
      videos: articles(where: {categoryName: "Video"}, first: 4) {
        nodes {
          ...ArticleContent
        }
      }
      sessions: articles(where: {categoryName: "GJ Sessions"}, first: 4) {
        nodes {
          ...ArticleContent
        }
      }
    }
  `,
}

