import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import Link from '@components/Link'
import Paragraph from '@components/Paragraph'

import * as Styled from './styles/Title.style'
import type { TitleProps } from './Title.types'

const Title: FC<TitleProps> = ({ title, subtitle, links, inverse = false }: TitleProps): ReactElement => {
  return (
    <Styled.Title inverse={inverse}>
      <div>
        <Heading inverse={inverse} text={title} level={2} size={3} noMargin font='ChronicleCondensed' />
        {subtitle && <Paragraph inverse={inverse} text={subtitle} font='Cera' size={1} appearance='primary' />}
      </div>
      {links && (
        <Styled.LinkList>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  inverse={inverse}
                  showIcon={link.showIcon}
                  to={link.url}
                  appearance={link.showIcon ? 'primary' : 'secondary'}
                  font='Cera'
                  size={1}
                >
                  {link.text}
                </Link>
              </li>
            )
          })}
        </Styled.LinkList>
      )}
    </Styled.Title>
  )
}

export default Title
