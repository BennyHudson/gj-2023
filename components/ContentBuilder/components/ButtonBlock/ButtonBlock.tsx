import Image from 'next/image'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Button from '@components/Button'
import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'

import featuredImageUrl from '@helpers/featuredImageUrl'

import type { ButtonBlockProps } from './ButtonBlock.types'
import * as Styled from './styles/ButtonBlock.style'

const ButtonBlock: FC<ButtonBlockProps> = ({ title, callToAction, link, price, image }: ButtonBlockProps): ReactElement => {
  return (
    <Styled.ButtonBlock>
      {image?.sourceUrl && <Image src={featuredImageUrl(image.sourceUrl)} width={150} height={150} alt={image.caption || ''} />}
      <div>
        <Heading text={title} weight={3} level={2} font='Cera' size={1} noMargin />
        {price && <Paragraph appearance='secondary'>£{price?.toFixed(2)}</Paragraph>}
      </div>
      <Button size={1} href={link} text={callToAction || 'Learn More'} />
    </Styled.ButtonBlock>
  )
}

export default ButtonBlock
