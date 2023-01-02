import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/pro-light-svg-icons'

import Link from '@components/Link'

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
                <Link to={link.url}>{link.title}</Link>
                <FontAwesomeIcon icon={faAngleRight} />
              </>
              :
              <span>{link.title}</span>
            }
          </Styled.Breadcrumb>
        )
      })}
    </Styled.Breadcrumbs>
  )
}

export default Breadcrumbs
