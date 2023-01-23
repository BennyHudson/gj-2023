function featuredImageUrl(featuredImage: string): string {
  if (featuredImage.includes('cdn.dev')) return featuredImage.replace('cdn.dev', 'cdn')
  if (featuredImage.includes('dev.thegentlemansjournal.com')) return featuredImage.replace('dev', 'cdn')
  if (featuredImage.includes('http://thegentlemansjournal.local'))
    return featuredImage.replace('http://thegentlemansjournal.local', 'https://cdn.thegentlemansjournal.com')
  return featuredImage
}

export default featuredImageUrl
