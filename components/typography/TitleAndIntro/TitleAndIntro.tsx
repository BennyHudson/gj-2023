import React, { ReactElement, FC } from 'react'

import Heading from '@components/typography/Heading'

import * as Styled from './styles/TitleAndIntro.style'

import { TitleAndIntroProps } from './TitleAndIntro.types'

const TitleAndIntro: FC<TitleAndIntroProps> = ({
  title,
  intro,
  inverse = false
}: TitleAndIntroProps): ReactElement => {
  return (
    <Styled.TitleAndIntro>
      <Heading inverse={inverse} size={6} text={title} level={1} noMargin font='ChronicleCondensed' />
      <Heading inverse={inverse} size={1} text={intro.replace(/<\/?[^>]+(>|$)/g, '')} />
    </Styled.TitleAndIntro>
  )
}

export default TitleAndIntro
