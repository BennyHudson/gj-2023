import React, { ReactElement, FC, useState } from 'react'
import { useQuery } from '@apollo/client'

import { latestArticlesQuery } from '@queries/global/latest-articles'
import { categoryQuery } from '@queries/global/categories'

import PostGrid from '@components/PostGrid'
import LoadMore from '@components/LoadMore'
import SkeletonLoader from '@components/SkeletonLoader'

import { FeedProps, FeedState } from './Feed.types'

const Feed: FC<FeedProps> = ({ category, columns = 4, count }: FeedProps): ReactElement => {
  const [last, setLast] = useState<FeedState['last']>()
  const [allArticles, setAllArticles] = useState<FeedState['allArticles']>([])
  const [morePosts, setMorePosts] = useState<FeedState['morePosts']>(true)

  const { loading, fetchMore } = useQuery(category ? categoryQuery(category, columns, count).query : latestArticlesQuery(columns).query, {
    onCompleted: (data) => {
      setLast(data.articles.pageInfo.endCursor)
      setAllArticles(data.articles.edges)
      setMorePosts(data.articles.pageInfo.hasNextPage)
    }
  })

  const getMore = async () => {
    const more = await fetchMore({ variables: { after: last, }})
    if (more.data) {
      setLast(more.data.articles.pageInfo.endCursor)
      setAllArticles([...allArticles, ...more.data.articles.edges])
      setMorePosts(more.data.articles.pageInfo.hasNextPage)
    }
  }

  return (
    <>
      {loading ? 
        <SkeletonLoader columns={columns} />
        :
        <>
          {allArticles && <div><PostGrid posts={allArticles.map((article) => article.node)} columns={columns} /></div>}
          {morePosts && <LoadMore onClick={getMore} />}
        </>
      }
    </>
  )
}

export default Feed
