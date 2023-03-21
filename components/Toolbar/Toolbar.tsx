import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAltFast, faPencilAlt, faPlus } from '@fortawesome/pro-light-svg-icons'

import * as Styled from './styles/Toolbar.style'

import { ToolbarProps } from './Toolbar.types'
import { useRouter } from 'next/router'

const Toolbar: FC<ToolbarProps> = ({
  databaseId,
}: ToolbarProps): ReactElement => {
  const { pathname } = useRouter()

  const getPostType = (): string => {
    if (pathname.includes('/article/')) return 'Article'
    if (pathname.includes('/podcasts/')) return 'Podcast'
    if (pathname.includes('/house-note/')) return 'House Note'
    return 'Page'
  }


  return (
    <Styled.Toolbar>
      <Styled.Link href='https://cms.thegentlemansjournal.com/wp-admin'><FontAwesomeIcon icon={faTachometerAltFast as IconProp} /> Dashboard</Styled.Link>
      {databaseId && <Styled.Link href={`https://cms.thegentlemansjournal.com/wp-admin/post.php?post=${databaseId}&action=edit`}><FontAwesomeIcon icon={faPencilAlt as IconProp} /> Edit {getPostType()}</Styled.Link>}
      <Styled.Link href='https://cms.thegentlemansjournal.com/wp-admin/post-new.php?post_type=article'><FontAwesomeIcon icon={faPlus as IconProp} /> New Article</Styled.Link>
      <Styled.Link href='https://cms.thegentlemansjournal.com/wp-admin/post-new.php?post_type=podcast'><FontAwesomeIcon icon={faPlus as IconProp} /> New Podcast</Styled.Link>
      <Styled.Link href='https://cms.thegentlemansjournal.com/wp-admin/post-new.php?post_type=house-note'><FontAwesomeIcon icon={faPlus as IconProp} /> New House Note</Styled.Link>
      <Styled.Link href='https://cms.thegentlemansjournal.com/wp-admin/post-new.php'><FontAwesomeIcon icon={faPlus as IconProp} /> New Post</Styled.Link>
    </Styled.Toolbar>
  )
}

export default Toolbar
