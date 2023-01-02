import { useEffect, useState, useContext } from 'react'

import PageContext, { PageContextType } from '@context/PageContext'

function useFeaturedImage(databaseId: number): { featuredImage: string, loaded: boolean, caption?: string } {
  const [featuredImage, setFeaturedImage ] = useState('')
  const [ caption, setCaption ] = useState()
  const [loaded, setLoaded ] = useState(false)

  const { cmsUrl, apiUrl, featuredImages, setFeaturedImages } = useContext(PageContext) as PageContextType

  const getPostData = async () => {
    if (!databaseId) return
    const media = await fetch(`${apiUrl}/media/${databaseId}`)
    const mediaData = await media.json()
    if (!mediaData.source_url) return
    const imageUrl = mediaData.source_url?.replace(cmsUrl, 'https://cdn.thegentlemansjournal.com')
    setFeaturedImage(imageUrl)
    setCaption(mediaData.caption.rendered)
    setFeaturedImages([...featuredImages.map(featuredImage => featuredImage), { featuredImageDatabaseId: databaseId, url: imageUrl }])
    // if (thumbnail) {
    //   setFeaturedImage(mediaData.media_details.sizes.thumbnail.source_url?.replace(cmsUrl, 'https://cdn.thegentlemansjournal.com'))
    // }
    setLoaded(true)
  }

  useEffect(() => {  
    const cachedFeaturedImage = (featuredImages.find((featuredImage) => featuredImage.featuredImageDatabaseId === databaseId))  
    
    if (cachedFeaturedImage) {
      setFeaturedImage(cachedFeaturedImage.url)
      setLoaded(true)
      return
    }

    getPostData()
  }, [databaseId])

  return {
    featuredImage,
    loaded,
    caption,
  }
}

export default useFeaturedImage