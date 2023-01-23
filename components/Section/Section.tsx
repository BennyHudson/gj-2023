import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/Section.style'

import { SectionProps } from './Section.types'

const Section: FC<SectionProps> = ({
  children,
  appearance = 'primary',
  containerWidth = 'regular',
  backgroundImage,
}: SectionProps): ReactElement => {
  return (
    <Styled.Section appearance={appearance} backgroundImage={backgroundImage}>
      <Styled.Content containerWidth={containerWidth}>{children}</Styled.Content>
    </Styled.Section>
  )
}

export default Section
