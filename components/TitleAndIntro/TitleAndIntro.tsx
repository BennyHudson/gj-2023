import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'

import * as Styled from './styles/TitleAndIntro.style'
import type { TitleAndIntroProps } from './TitleAndIntro.types'

const TitleAndIntro: FC<TitleAndIntroProps> = ({ title, intro, inverse = false }: TitleAndIntroProps): ReactElement => {
  return (
    <Styled.TitleAndIntro>
      <Heading inverse={inverse} size={6} text={title} level={1} noMargin font='ChronicleCondensed' />
      <Heading inverse={inverse} size={1} text={intro.replace(/<\/?[^>]+(>|$)/g, '')} />
    </Styled.TitleAndIntro>
  )
}

export default TitleAndIntro
