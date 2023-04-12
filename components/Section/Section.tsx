import type { FC, ReactElement } from 'react'
import React from 'react'

import type { SectionProps } from './Section.types'
import * as Styled from './styles/Section.style'

const Section: FC<SectionProps> = ({
  children,
  appearance = 'primary',
  containerWidth = 'regular',
  backgroundImage,
  paddingLevel = 2,
  textAlign = 'left',
}: SectionProps): ReactElement => {
  return (
    <Styled.Section appearance={appearance} backgroundImage={backgroundImage} paddingLevel={paddingLevel}>
      <Styled.Content containerWidth={containerWidth} textAlign={textAlign}>
        {children}
      </Styled.Content>
    </Styled.Section>
  )
}

export default Section
