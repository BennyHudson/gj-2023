import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import type { FC, ReactElement } from 'react'
import React from 'react'

import type { LinkProps } from './Link.types'
import * as Styled from './styles/Link.style'

const GJLink: FC<LinkProps> = ({
  appearance = 'primary',
  to,
  children,
  size = 3,
  weight = 2,
  inverse = false,
  font = 'Chronicle',
  transform,
  showIcon = false,
  href,
}: LinkProps): ReactElement => {
  const renderAs = (): string | typeof Link => {
    if (to) return Link
    if (to && to.includes('http')) return 'a'
    return 'a'
  }

  return (
    <Styled.Link
      $inverse={inverse}
      size={size}
      weight={weight}
      font={font}
      transform={transform}
      appearance={appearance}
      $showIcon={showIcon}
      as={renderAs()}
      href={href ? href : to}
    >
      {children} {showIcon && <FontAwesomeIcon icon={faAngleRight as IconProp} size='2x' />}
    </Styled.Link>
  )
}

export default GJLink
