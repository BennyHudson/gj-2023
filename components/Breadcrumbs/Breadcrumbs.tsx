import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/pro-thin-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import he from 'he'
import type { FC, ReactElement } from 'react'
import React from 'react'

import Link from '@components/Link'

import { useBreakpoints } from '@hooks/useBreakpoints'

import type { BreadcrumbsProps } from './Breadcrumbs.types'
import * as Styled from './styles/Breadcrumbs.style'

const Breadcrumbs: FC<BreadcrumbsProps> = ({ links }: BreadcrumbsProps): ReactElement => {
  const { sm, mdAndAbove } = useBreakpoints()

  return (
    <Styled.Breadcrumbs>
      {sm && (
        <>
          <Styled.Breadcrumb>
            <Link to={links[0].url.replace('https://cms.thegentlemansjournal.com/', '/')} font='Cera'>
              {he.decode(links[0].text)}
            </Link>
            <FontAwesomeIcon icon={faAngleRight as IconProp} />
          </Styled.Breadcrumb>
          <Styled.Breadcrumb>
            <span>{links[links.length - 1].text}</span>
          </Styled.Breadcrumb>
        </>
      )}
      {mdAndAbove &&
        links.map((link, index) => {
          return (
            <Styled.Breadcrumb key={index}>
              {index !== links.length - 1 ? (
                <>
                  <Link to={link.url.replace('https://cms.thegentlemansjournal.com/', '/')} font='Cera'>
                    {he.decode(link.text)}
                  </Link>
                  <FontAwesomeIcon icon={faAngleRight as IconProp} />
                </>
              ) : (
                <span>{he.decode(link.text)}</span>
              )}
            </Styled.Breadcrumb>
          )
        })}
    </Styled.Breadcrumbs>
  )
}

export default Breadcrumbs
