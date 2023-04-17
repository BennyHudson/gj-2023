import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Byline from '@components/Byline'
import ContentBuilder from '@components/ContentBuilder'
import Link from '@components/Link'
import RawHtmlWrapper from '@components/RawHtmlWrapper'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { ContentGridProps } from './ContentGrid.types'
import * as Styled from './styles/ContentGrid.style'

const ContentGrid: FC<ContentGridProps> = ({
  byline,
  contentBuilder,
  contentBuilderPrefix,
  articleNote,
  content,
}: ContentGridProps): ReactElement => {
  return (
    <Styled.ContentGrid>
      {byline && (
        <Styled.Sidebar>
          <Byline {...byline} />
        </Styled.Sidebar>
      )}
      {content && (
        <Styled.Content>
          <RawHtmlWrapper content={content} />
        </Styled.Content>
      )}
      {contentBuilder && contentBuilder.content && (
        <ContentBuilder prefix={contentBuilderPrefix} content={contentBuilder.content} membersOnly={contentBuilder.membersOnly} />
      )}
      {articleNote && (
        <Styled.ArticleNote>
          <Image src={featuredImageUrl(articleNote.image.fullSize)} alt='' width={200} height={200} />
          <Styled.ArticleNoteContent>
            <RawHtmlWrapper content={articleNote.content} />
            <Link href={articleNote.link.url} size={2} font='Cera' transform='uppercase' showIcon>
              {articleNote.link.title}
            </Link>
          </Styled.ArticleNoteContent>
        </Styled.ArticleNote>
      )}
      <Styled.SecondarySidebar></Styled.SecondarySidebar>
    </Styled.ContentGrid>
  )
}

export default ContentGrid
