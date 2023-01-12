import React, { ReactElement, FC, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUser, faShoppingBag, faEnvelope } from '@fortawesome/pro-light-svg-icons'
import { useQuery } from '@apollo/client'
import Link from 'next/link'

import { newsletterModalQuery } from '@queries/global/site-options'

import SearchForm from '@components/search/SearchForm'
import Cart from '@components/cart/Cart'
import NewsletterModal from '@components/modals/NewsletterModal'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from './styles/SecondaryNav.style'

import { SecondaryNavProps } from './SecondaryNav.types'

const SecondaryNav: FC<SecondaryNavProps> = ({
  inverse,
}: SecondaryNavProps): ReactElement => {
  const { setShowModal } = useContext(PageContext) as PageContextProps

  return (
    <Styled.SecondaryNav>
      <ul>
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
        <li>
          <Styled.Button $inverse={inverse} href='/newsletter'>
            <FontAwesomeIcon icon={faEnvelope as IconProp} /> Newsletter
          </Styled.Button>
        </li>
      </ul>
    </Styled.SecondaryNav>
  )
}

export default SecondaryNav
