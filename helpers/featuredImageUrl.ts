function featuredImageUrl(featuredImage: string): string {
  if (featuredImage.includes('cdn.dev')) return featuredImage.replace('cdn.dev', 'cdn')
  if (featuredImage.includes('dev.thegentlemansjournal.com')) return featuredImage.replace('dev', 'cdn')
  return featuredImage
}

export default featuredImageUrl