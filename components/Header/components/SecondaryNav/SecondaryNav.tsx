import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faSearch, faShoppingBag, faUser } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement} from 'react'
import React, { useContext } from 'react'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import { useBreakpoints } from '@hooks/useBreakpoints'

import type { SecondaryNavProps } from './SecondaryNav.types'
import * as Styled from './styles/SecondaryNav.style'

const SecondaryNav: FC<SecondaryNavProps> = ({ inverse, showAll = false }: SecondaryNavProps): ReactElement => {
  const { cart } = useContext(PageContext) as PageContextProps
  const { lgAndAbove } = useBreakpoints()
  return (
    <Styled.SecondaryNav>
      <ul>
        {(showAll || lgAndAbove) && (
          <>
            <li>
              <Styled.IconButton $inverse={inverse} href='/search' title='Search'>
                <FontAwesomeIcon icon={faSearch as IconProp} />
              </Styled.IconButton>
            </li>
            <li>
              <Styled.IconButton $inverse={inverse} href='/clubhouse' title='Clubhouse'>
                <FontAwesomeIcon icon={faUser as IconProp} />
              </Styled.IconButton>
            </li>
            <li>
              <Styled.IconButton $inverse={inverse} href='/cart' title='Cart'>
                {cart.length > 0 && (
                  <Styled.NumberBadge $inverse={inverse}>
                    <span>{cart.length}</span>
                  </Styled.NumberBadge>
                )}
                <FontAwesomeIcon icon={faShoppingBag as IconProp} />
              </Styled.IconButton>
            </li>
          </>
        )}
        <li>
          <Styled.Button $inverse={inverse} href='/newsletter'>
            <FontAwesomeIcon icon={faEnvelope as IconProp} /> {(showAll || lgAndAbove) && 'Newsletter'}
          </Styled.Button>
        </li>
      </ul>
    </Styled.SecondaryNav>
  )
}

export default SecondaryNav
