import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/Section.style'

import { SectionProps } from './Section.types'

const Section: FC<SectionProps> = ({
  children,
  appearance = 'primary',
  containerWidth = 'regular',
  backgroundImage,
  paddingLevel = 2,
}: SectionProps): ReactElement => {
  return (
    <Styled.Section appearance={appearance} backgroundImage={backgroundImage} paddingLevel={paddingLevel}>
      <Styled.Content containerWidth={containerWidth}>{children}</Styled.Content>
    </Styled.Section>
  )
}

export default Section
