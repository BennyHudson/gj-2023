function featuredImageUrl(featuredImage: string): string {
  // if (featuredImage.includes('//cms.thegentlemansjournal.com')) return featuredImage.replace('cms', 'cdn')
  if (featuredImage.includes('cdn.cms')) return featuredImage.replace('cdn.cms', 'cdn')
  if (featuredImage.includes('dev.thegentlemansjournal.com')) return featuredImage.replace('dev', 'cdn')
  if (featuredImage.includes('cms.thegentlemansjournal.com')) return featuredImage.replace('cms', 'cdn')
  if (featuredImage.includes('http://thegentlemansjournal.local'))
    return featuredImage.replace('http://thegentlemansjournal.local', 'https://cdn.thegentlemansjournal.com/wp-content')
  return featuredImage
}

export default featuredImageUrl
