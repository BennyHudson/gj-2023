import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import Byline from '@components/Byline'
import ContentBuilder from '@components/ContentBuilder'
import RawHtmlWrapper from '@components/RawHtmlWrapper'

import * as Styled from './styles/ContentGrid.style'

import { ContentGridProps } from './ContentGrid.types'
import Link from '@components/Link'

const ContentGrid: FC<ContentGridProps> = ({
  byline,
  contentBuilder,
  contentBuilderPrefix,
  articleNote,
  content
}: ContentGridProps): ReactElement => {
  return (
    <Styled.ContentGrid>
      {byline &&
        <Styled.Sidebar>
          <Byline {...byline} />
        </Styled.Sidebar>
      }
      {content && <Styled.Content><RawHtmlWrapper content={content} /></Styled.Content>}
      <ContentBuilder content={contentBuilder} prefix={contentBuilderPrefix} />
      {articleNote &&
        <Styled.ArticleNote>
          <Image src={featuredImageUrl(articleNote.image.sourceUrl)} alt='' width={200} height={200} />
          <Styled.ArticleNoteContent>
            <RawHtmlWrapper content={articleNote.content} />
            <Link href={articleNote.link.url} size={2} font='Cera' transform='uppercase' showIcon>{articleNote.link.title}</Link>
          </Styled.ArticleNoteContent>
        </Styled.ArticleNote>
      }
      <Styled.SecondarySidebar>

      </Styled.SecondarySidebar>
    </Styled.ContentGrid>
  )
}

export default ContentGrid
