export const media = () => {
  return `
    fullSize: sourceUrl
    postThumb: sourceUrl(size: POST_THUMB)
    squareThumb: sourceUrl(size: POST_SQUARE)
    medium: sourceUrl(size: MEDIUM)
    large: sourceUrl(size: LARGE)
  `
}