import React, { ReactElement, FC } from 'react'

import Breadcrumbs from '@components/typography/Breadcrumbs'
import Heading from '@components/typography/Heading'
import Byline from '@components/typography/Byline'

import * as Styled from './styles/Masthead.style'

import { MastheadProps } from './Masthead.types'

const Masthead: FC<MastheadProps> = ({
  breadcrumbs,
  title,
  subtitle,
  fullWidth = true,
  author,
}: MastheadProps): ReactElement => {
  return (
    <Styled.Masthead>
      <Styled.MastheadContent fullWidth={fullWidth}>
        {breadcrumbs && <Breadcrumbs links={breadcrumbs} />}
        <Heading text={title} size={5} weight={1} level={1} noMargin={fullWidth} font='ChronicleCondensed' />
        <Heading text={subtitle} weight={1} size={1} font='Cera' appearance='secondary' />
        {author && <Byline author={author} />}
      </Styled.MastheadContent>
    </Styled.Masthead>
  )
}

export default Masthead
