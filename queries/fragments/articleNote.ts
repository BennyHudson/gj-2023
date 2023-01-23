export interface ArticleNote {
  content: string
  image: {
    sourceUrl: string
  }
  link: {
    title: string
    url: string
  }
}

export const articleNote = () => {
  return `gjOptions {
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
  }`
}
