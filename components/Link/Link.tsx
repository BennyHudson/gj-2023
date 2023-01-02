/* eslint-disable jsx-control-statements/jsx-use-if-tag */
import React, { ReactElement, FC } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/pro-light-svg-icons'

import * as Styled from './styles/Link.style'

import { LinkProps } from './Link.types'

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
}: LinkProps): ReactElement => {
  return (
    <>
      {to.includes('http') ? 
        <Styled.Link 
          inverse={inverse} 
          size={size}
          weight={weight}
          font={font}
          transform={transform}
          appearance={appearance}
          showIcon={showIcon}
          as='a'
          href={to}
        >
          {children} {showIcon && <FontAwesomeIcon icon={faAngleRight} size='2x' />}
        </Styled.Link>
        :
        <Styled.Link 
          inverse={inverse} 
          size={size}
          weight={weight}
          font={font}
          transform={transform}
          appearance={appearance}
          showIcon={showIcon}
          as={Link}
          href={to}
        >
          {children} {showIcon && <FontAwesomeIcon icon={faAngleRight} size='2x' />}
        </Styled.Link>
      }
    </>
  )
}

export default GJLink
