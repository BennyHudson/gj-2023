import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/pro-light-svg-icons'

import Link from '@components/interactions/Link'

import * as Styled from './styles/Breadcrumbs.style'

import { BreadcrumbsProps } from './Breadcrumbs.types'

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  links,
}: BreadcrumbsProps): ReactElement => {
  return (
    <Styled.Breadcrumbs>
      {links.map((link, index) => {
        return (
          <Styled.Breadcrumb key={index}>
            {index !== links.length - 1 ?
              <>
                <Link to={link.url.replace('https://www.thegentlemansjournal.com/', '/')} font='Cera'>{link.text}</Link>
                <FontAwesomeIcon icon={faAngleRight as IconProp} />
              </>
              :
              <span>{link.text}</span>
            }
          </Styled.Breadcrumb>
        )
      })}
    </Styled.Breadcrumbs>
  )
}

export default Breadcrumbs
