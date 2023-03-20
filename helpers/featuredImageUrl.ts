function featuredImageUrl(featuredImage: string): string {
  if (featuredImage.includes('cdn.thegentlemansjournal.com')) return featuredImage.replace('cdn', 'cdn.cms')
  // if (featuredImage.includes('cdn.cms')) return featuredImage.replace('cdn.cms', 'cdn')
  // if (featuredImage.includes('dev.thegentlemansjournal.com')) return featuredImage.replace('dev', 'cdn')
  // if (featuredImage.includes('cms.thegentlemansjournal.com')) return featuredImage.replace('cms', 'cdn')
  if (featuredImage.includes('http://gentlemans-journal.local'))
    return featuredImage.replace('http://gentlemans-journal.local/app', 'https://cdn.cms.thegentlemansjournal.com/wp-content')
  return featuredImage
}

export default featuredImageUrl
