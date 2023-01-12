import React, { ReactElement, FC, useContext } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import Heading from '@components/typography/Heading'

import * as Styled from './styles/SplitPageTemplate.style'

import { SplitPageTemplateProps } from './SplitPageTemplate.types'
import PageContext, { PageContextProps } from '@context/PageContext'

const SplitPageTemplate: FC<SplitPageTemplateProps> = ({
  title,
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
          {title && <Styled.Title><Heading size={5} text={title} font='ChronicleCondensed' /></Styled.Title>}
          {children}
        </div>
      </Styled.Content>
    </Styled.SplitPageTemplate>
  )
}

export default SplitPageTemplate
