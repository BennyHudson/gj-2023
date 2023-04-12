import type { FC, ReactElement} from 'react'
import React, { useContext } from 'react'

import Heading from '@components/Heading'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { SplitPageTemplateProps } from './SplitPageTemplate.types'
import * as Styled from './styles/SplitPageTemplate.style'

const SplitPageTemplate: FC<SplitPageTemplateProps> = ({ title, image, children }: SplitPageTemplateProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps

  return (
    <Styled.SplitPageTemplate headerHeight={headerHeight}>
      <Styled.BackgroundImage backgroundImage={featuredImageUrl(image)} />
      <Styled.Content>
        <Styled.ContentWrapper>
          {title && (
            <Styled.Title>
              <Heading size={5} text={title} font='ChronicleCondensed' />
            </Styled.Title>
          )}
          {children}
        </Styled.ContentWrapper>
      </Styled.Content>
    </Styled.SplitPageTemplate>
  )
}

export default SplitPageTemplate
