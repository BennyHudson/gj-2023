import React, { ReactElement, FC, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingBag, faEnvelope } from '@fortawesome/pro-light-svg-icons'
import { Link } from 'gatsby'

import LoginForm from '@components/LoginForm'
import SearchForm from '@components/SearchForm'
import Cart from '@components/Cart'
import NewsletterModal from '@components/NewsletterModal'

import PageContext, { PageContextType } from '@context/PageContext'

import * as Styled from './styles/SecondaryNav.style'

import { SecondaryNavProps } from './SecondaryNav.types'

const SecondaryNav: FC<SecondaryNavProps> = ({
  inverse,
}: SecondaryNavProps): ReactElement => {
  const { setShowModal } = useContext(PageContext) as PageContextType
  return (
    <Styled.SecondaryNav>
      <ul>
        <li>
          <Styled.IconButton inverse={inverse} as='button' onClick={() => setShowModal(<SearchForm />)}>
            <FontAwesomeIcon icon={faSearch} />
          </Styled.IconButton>
        </li>
        <li>
          <Styled.IconButton inverse={inverse} as='button' onClick={() => setShowModal(<LoginForm />)}>
            <FontAwesomeIcon icon={faUser} />
          </Styled.IconButton>
        </li>
        <li>
          <Styled.IconButton inverse={inverse} as='button' onClick={() => setShowModal(<Cart />)}>
            <FontAwesomeIcon icon={faShoppingBag} />
          </Styled.IconButton>
        </li>
        <li>
          <Styled.Button inverse={inverse} onClick={() => setShowModal(<NewsletterModal />)}>
            <FontAwesomeIcon icon={faEnvelope} /> Newsletter
          </Styled.Button>
        </li>
      </ul>
    </Styled.SecondaryNav>
  )
}

export default SecondaryNav
