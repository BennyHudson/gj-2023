import React, { ReactElement, FC, useContext } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import * as Styled from './styles/SplitPageTemplate.style'

import { SplitPageTemplateProps } from './SplitPageTemplate.types'
import PageContext, { PageContextProps } from '@context/PageContext'

const SplitPageTemplate: FC<SplitPageTemplateProps> = ({
  image,
  children,
}: SplitPageTemplateProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps

  return (
    <Styled.SplitPageTemplate headerHeight={headerHeight}>
      <Styled.BackgroundImage>
        <Image src={featuredImageUrl(image)} fill alt='' priority />
      </Styled.BackgroundImage>
      <Styled.Content>
        <div>
          {children}
        </div>
      </Styled.Content>
    </Styled.SplitPageTemplate>
  )
}

export default SplitPageTemplate
