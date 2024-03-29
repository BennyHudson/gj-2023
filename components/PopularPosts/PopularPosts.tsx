import type { ManipulateType } from 'dayjs'
import dayjs from 'dayjs'
import he from 'he'
import type { FC, ReactElement } from 'react'
import React, { useContext, useEffect, useState } from 'react'

import Heading from '@components/Heading'
import Link from '@components/Link'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { DateRanges, PopularPostsState } from './PopularPosts.types'
import * as Styled from './styles/PopularPosts.style'

const PopularPosts: FC = (): ReactElement => {
  const [dateRange, setDateRange] = useState<PopularPostsState['dateRange']>('week')
  const [popularPosts, setPopularPosts] = useState<PopularPostsState['popularPosts']>([])

  const ranges = ['week', 'month', 'year'] as DateRanges[]

  const { apiUrl, cmsUrl } = useContext(PageContext) as PageContextProps

  // TODO: Need to update this to actually query posts by popularity | Otherwise styled & ready to go
  useEffect(() => {
    const date = dayjs()
      .subtract(1, dateRange as ManipulateType)
      .toISOString()
    const getPosts = async () => {
      const posts = await fetch(`${apiUrl}/articles?per_page=5&after=${date}`)
      const postData = await posts.json()
      setPopularPosts(postData)
    }

    getPosts()
  }, [dateRange])

  return (
    <Styled.PopularPosts>
      <Styled.Heading>
        <Heading size={1} text={`Most popular this ${dateRange}`} font='Cera' noMargin />
        <Styled.Toggles>
          {ranges.map((range, index) => {
            return (
              <li key={index}>
                <Styled.Toggle $isActive={dateRange === range} onClick={() => setDateRange(range)}>
                  {range}
                </Styled.Toggle>
              </li>
            )
          })}
        </Styled.Toggles>
      </Styled.Heading>
      <Styled.PostList>
        {popularPosts.map((post, index) => {
          return (
            <li key={index}>
              <Link to={post.link.replace(cmsUrl, '')} size={2} weight={1}>
                {he.decode(post.title.rendered)}
              </Link>
            </li>
          )
        })}
      </Styled.PostList>
    </Styled.PopularPosts>
  )
}

export default PopularPosts
