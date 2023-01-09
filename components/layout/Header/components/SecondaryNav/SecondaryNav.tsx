import React, { ReactElement, FC, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUser, faShoppingBag, faEnvelope } from '@fortawesome/pro-light-svg-icons'
import { Link } from 'gatsby'

import LoginForm from '@components/forms/LoginForm'
import SearchForm from '@components/search/SearchForm'
import Cart from '@components/cart/Cart'
import NewsletterModal from '@components/newsletter/NewsletterModal'

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
          <Styled.IconButton inverse={inverse} as='button' onClick={() => setShowModal(<SearchForm />)}>
            <FontAwesomeIcon icon={faSearch as IconProp} />
          </Styled.IconButton>
        </li>
        <li>
          <Styled.IconButton inverse={inverse} as='button' onClick={() => setShowModal(<LoginForm />)}>
            <FontAwesomeIcon icon={faUser as IconProp} />
          </Styled.IconButton>
        </li>
        <li>
          <Styled.IconButton inverse={inverse} as='button' onClick={() => setShowModal(<Cart />)}>
            <FontAwesomeIcon icon={faShoppingBag as IconProp} />
          </Styled.IconButton>
        </li>
        <li>
          <Styled.Button inverse={inverse} onClick={() => setShowModal(<NewsletterModal />)}>
            <FontAwesomeIcon icon={faEnvelope as IconProp} /> Newsletter
          </Styled.Button>
        </li>
      </ul>
    </Styled.SecondaryNav>
  )
}

export default SecondaryNav
