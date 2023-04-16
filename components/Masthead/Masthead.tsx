import type { FC, ReactElement } from 'react'
import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs'
import Byline from '@components/Byline'
import Heading from '@components/Heading'

import type { MastheadProps } from './Masthead.types'
import * as Styled from './styles/Masthead.style'

const Masthead: FC<MastheadProps> = ({ breadcrumbs, title, subtitle, fullWidth = true, author }: MastheadProps): ReactElement => {
  return (
    <Styled.Masthead>
      <Styled.MastheadContent fullWidth={fullWidth}>
        {breadcrumbs && <Breadcrumbs links={breadcrumbs} />}
        <Heading text={title} size={5} weight={1} level={1} noMargin={fullWidth} font='ChronicleCondensed' />
        {subtitle && <Heading text={subtitle} weight={1} size={1} font='Cera' appearance='secondary' />}
        {author && <Byline author={author} />}
      </Styled.MastheadContent>
    </Styled.Masthead>
  )
}

export default Masthead
