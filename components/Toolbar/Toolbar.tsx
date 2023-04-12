import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faPlus, faTachometerAltFast } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import type { FC, ReactElement } from 'react'
import React from 'react'

import * as Styled from './styles/Toolbar.style'
import type { ToolbarProps } from './Toolbar.types'

const Toolbar: FC<ToolbarProps> = ({ databaseId }: ToolbarProps): ReactElement => {
  const { pathname } = useRouter()

  const getPostType = (): string => {
    if (pathname.includes('/article/')) return 'Article'
    if (pathname.includes('/podcasts/')) return 'Podcast'
    if (pathname.includes('/house-note/')) return 'House Note'
    return 'Page'
  }

  return (
    <Styled.Toolbar>
      <Styled.Link href='https://cms.thegentlemansjournal.com/wp-admin'>
        <FontAwesomeIcon icon={faTachometerAltFast as IconProp} /> Dashboard
      </Styled.Link>
      {databaseId && (
        <Styled.Link href={`https://cms.thegentlemansjournal.com/wp-admin/post.php?post=${databaseId}&action=edit`}>
          <FontAwesomeIcon icon={faPencilAlt as IconProp} /> Edit {getPostType()}
        </Styled.Link>
      )}
      <Styled.Link href='https://cms.thegentlemansjournal.com/wp-admin/post-new.php?post_type=article'>
        <FontAwesomeIcon icon={faPlus as IconProp} /> New Article
      </Styled.Link>
      <Styled.Link href='https://cms.thegentlemansjournal.com/wp-admin/post-new.php?post_type=podcast'>
        <FontAwesomeIcon icon={faPlus as IconProp} /> New Podcast
      </Styled.Link>
      <Styled.Link href='https://cms.thegentlemansjournal.com/wp-admin/post-new.php?post_type=house-note'>
        <FontAwesomeIcon icon={faPlus as IconProp} /> New House Note
      </Styled.Link>
      <Styled.Link href='https://cms.thegentlemansjournal.com/wp-admin/post-new.php'>
        <FontAwesomeIcon icon={faPlus as IconProp} /> New Post
      </Styled.Link>
    </Styled.Toolbar>
  )
}

export default Toolbar
