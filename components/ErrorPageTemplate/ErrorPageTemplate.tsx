import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Button from '@components/Button'
import Heading from '@components/Heading'
import Overlay from '@components/Overlay'
import Paragraph from '@components/Paragraph'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { ErrorPageTemplateProps } from './ErrorPageTemplate.types'
import * as Styled from './styles/ErrorPageTemplate.style'

const ErrorPageTemplate: FC<ErrorPageTemplateProps> = ({ backgroundImage }: ErrorPageTemplateProps): ReactElement => {
  return (
    <Styled.ErrorPageTemplate>
      <Styled.Content>
        <Heading size={5} inverse text='404' font='ChronicleCondensed' noMargin />
        <Paragraph font='Cera' weight={3} text='Oops! This page doesn’t exist.' noMargin inverse />
        <Paragraph font='Cera' weight={3} text='Christoph Waltz is looking into it.' inverse />
        <Button href='/' text='Go Home' />
      </Styled.Content>
      <Overlay />
      <Image src={featuredImageUrl(backgroundImage)} fill alt='' />
    </Styled.ErrorPageTemplate>
  )
}

export default ErrorPageTemplate
