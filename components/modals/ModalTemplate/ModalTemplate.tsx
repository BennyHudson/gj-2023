import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import featuredImageUrl from '@helpers/featuredImageUrl'

import * as Styled from './styles/ModalTemplate.style'

import { ModalTemplateProps } from './ModalTemplate.types'

const ModalTemplate: FC<ModalTemplateProps> = ({
  image,
  children,
}: ModalTemplateProps): ReactElement => {
  return (
    <Styled.ModalTemplate>
      <Styled.BackgroundImage>
        <Image src={featuredImageUrl(image)} fill alt='' priority />
      </Styled.BackgroundImage>
      <Styled.Content>
        {children}
      </Styled.Content>
    </Styled.ModalTemplate>
  )
}

export default ModalTemplate
