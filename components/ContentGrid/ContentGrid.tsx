import React, { ReactElement, FC } from 'react'

import Byline from '@components/Byline'
import ContentBuilder from '@components/ContentBuilder'

import * as Styled from './styles/ContentGrid.style'

import { ContentGridProps } from './ContentGrid.types'

const ContentGrid: FC<ContentGridProps> = ({
  byline,
  contentBuilder,
  contentBuilderPrefix,
}: ContentGridProps): ReactElement => {
  return (
    <Styled.ContentGrid>
      {byline &&
        <Styled.Sidebar>
          <Byline {...byline} />
        </Styled.Sidebar>
      }
      <ContentBuilder content={contentBuilder} prefix={contentBuilderPrefix} />
      <Styled.SecondarySidebar>

      </Styled.SecondarySidebar>
    </Styled.ContentGrid>
  )
}

export default ContentGrid
