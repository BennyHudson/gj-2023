import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/pro-thin-svg-icons'

import Link from '@components/Link'

import * as Styled from './styles/Breadcrumbs.style'

import { BreadcrumbsProps } from './Breadcrumbs.types'
import { useBreakpoints } from '@hooks/useBreakpoints'

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  links,
}: BreadcrumbsProps): ReactElement => {
  const { sm, mdAndAbove } = useBreakpoints()
  
  return (
    <Styled.Breadcrumbs>
      {sm &&
        <>
          <Styled.Breadcrumb>
            <Link to={links[0].url.replace('https://www.thegentlemansjournal.com/', '/')} font='Cera'>{links[0].text}</Link>
            <FontAwesomeIcon icon={faAngleRight as IconProp} />
          </Styled.Breadcrumb>
          <Styled.Breadcrumb>
            <span>{links[links.length - 1].text}</span>
          </Styled.Breadcrumb>
        </>
      }
      {mdAndAbove && links.map((link, index) => {
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
