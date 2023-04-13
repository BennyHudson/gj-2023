import { useQuery } from '@apollo/client'
import type { FC, ReactElement } from 'react'
import React, { useState } from 'react'

import LoadMore from '@components/LoadMore'
import PostGrid from '@components/PostGrid'
import SkeletonLoader from '@components/SkeletonLoader'

import { articleCategoryQuery, postCategoryQuery } from '@queries/global/categories'
import { latestArticlesQuery } from '@queries/global/latest-articles'

import type { FeedProps, FeedState } from './Feed.types'

const Feed: FC<FeedProps> = ({ category, columns = 4, count, showAdvert = true }: FeedProps): ReactElement => {
  const [lastArticle, setLastArticle] = useState<FeedState['last']>()
  const [lastPost, setLastPost] = useState<FeedState['last']>()
  const [moreArticles, setMoreArticles] = useState<FeedState['moreArticles']>(true)
  const [morePosts, setMorePosts] = useState<FeedState['moreArticles']>(true)

  const [allFeedElements, setAllFeedElements] = useState<FeedState['allFeedElements']>([])

  const articleQuery = useQuery(category ? articleCategoryQuery(category, columns, count).query : latestArticlesQuery(columns).query, {
    onCompleted: (data) => {
      setLastArticle(data.articles.pageInfo.endCursor)
      setAllFeedElements(data.articles.edges)
      setMoreArticles(data.articles.pageInfo.hasNextPage)
    },
  })

  const postQuery = useQuery(category ? postCategoryQuery(category, columns, count).query : latestArticlesQuery(columns).query, {
    onCompleted: (data) => {
      setLastPost(data.posts.pageInfo.endCursor)
      setMorePosts(data.posts.pageInfo.hasNextPage)
    },
  })

  const getMoreArticles = async () => {
    const more = await articleQuery.fetchMore({ variables: { after: lastArticle, first: 20 } })
    if (more.data) {
      setLastArticle(more.data.articles.pageInfo.endCursor)
      setAllFeedElements([...allFeedElements, ...more.data.articles.edges])
      setMoreArticles(more.data.articles.pageInfo.hasNextPage)

      if (!more.data.articles.pageInfo.hasNextPage) {
        setAllFeedElements([...allFeedElements, ...postQuery.data.posts.edges])
      }
    }
  }

  const getMorePosts = async () => {
    const more = await postQuery.fetchMore({ variables: { after: lastPost, first: 20 } })
    if (more.data) {
      setLastPost(more.data.posts.pageInfo.endCursor)
      setAllFeedElements([...allFeedElements, ...more.data.posts.edges])
      setMorePosts(more.data.posts.pageInfo.hasNextPage)
    }
  }

  return (
    <>
      {articleQuery.loading ? (
        <SkeletonLoader columns={columns} />
      ) : (
        <>
          {allFeedElements && (
            <div>
              <PostGrid posts={allFeedElements.map((article) => article.node)} columns={columns} showAdvert={showAdvert} />
            </div>
          )}
          {(moreArticles || morePosts) && <LoadMore onClick={moreArticles ? getMoreArticles : getMorePosts} />}
        </>
      )}
    </>
  )
}

export default Feed
