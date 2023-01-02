import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/pro-light-svg-icons'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import * as Styled from './styles/Sharers.style'

import { SharersProps } from './Sharers.types'

const Sharers: FC<SharersProps> = ({
  title,
  url,
}: SharersProps): ReactElement => {
  console.log(title, url)
  return (
    <Styled.Sharers>
      <Styled.Sharer href='#'>
        <FontAwesomeIcon icon={faTwitter} />
      </Styled.Sharer>
      <Styled.Sharer href='#'>
        <FontAwesomeIcon icon={faFacebook} />
      </Styled.Sharer>
      <Styled.Sharer href='#'>
        <FontAwesomeIcon icon={faLinkedin} />
      </Styled.Sharer>
      <Styled.Sharer href='#'>
        <FontAwesomeIcon icon={faEnvelope} />
      </Styled.Sharer>
    </Styled.Sharers>
  )
}

export default Sharers
