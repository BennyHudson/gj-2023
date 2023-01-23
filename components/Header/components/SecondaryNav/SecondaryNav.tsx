import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUser, faShoppingBag, faEnvelope } from '@fortawesome/pro-light-svg-icons'

import * as Styled from './styles/SecondaryNav.style'

import { SecondaryNavProps } from './SecondaryNav.types'
import { useBreakpoints } from '@hooks/useBreakpoints'

const SecondaryNav: FC<SecondaryNavProps> = ({ inverse, showAll = false }: SecondaryNavProps): ReactElement => {
  const { mdAndAbove } = useBreakpoints()
  return (
    <Styled.SecondaryNav>
      <ul>
        {(showAll || mdAndAbove) && (
          <>
            <li>
              <Styled.IconButton $inverse={inverse} href='/search'>
                <FontAwesomeIcon icon={faSearch as IconProp} />
              </Styled.IconButton>
            </li>
            <li>
              <Styled.IconButton $inverse={inverse} href='/clubhouse'>
                <FontAwesomeIcon icon={faUser as IconProp} />
              </Styled.IconButton>
            </li>
            <li>
              <Styled.IconButton $inverse={inverse} href='/cart'>
                <FontAwesomeIcon icon={faShoppingBag as IconProp} />
              </Styled.IconButton>
            </li>
          </>
        )}
        <li>
          <Styled.Button $inverse={inverse} href='/newsletter'>
            <FontAwesomeIcon icon={faEnvelope as IconProp} /> {(showAll || mdAndAbove) && 'Newsletter'}
          </Styled.Button>
        </li>
      </ul>
    </Styled.SecondaryNav>
  )
}

export default SecondaryNav
