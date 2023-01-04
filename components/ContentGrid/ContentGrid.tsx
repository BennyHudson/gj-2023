import React, { ReactElement, FC } from 'react'

import Byline from '@components/Byline'
import ContentBuilder from '@components/ContentBuilder'

import * as Styled from './styles/ContentGrid.style'

import { ContentGridProps } from './ContentGrid.types'

const ContentGrid: FC<ContentGridProps> = ({
  byline,
  contentBuilder,
}: ContentGridProps): ReactElement => {
  return (
    <Styled.ContentGrid>
      <Styled.Sidebar>
        <Byline {...byline} />
      </Styled.Sidebar>
      <ContentBuilder content={contentBuilder} />
      <Styled.SecondarySidebar>

      </Styled.SecondarySidebar>
    </Styled.ContentGrid>
  )
}

export default ContentGrid
