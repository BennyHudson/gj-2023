import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/pro-light-svg-icons'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import * as Styled from './styles/Sharers.style'

import { SharersProps } from './Sharers.types'

const Sharers: FC<SharersProps> = ({
  title,
  url,
}: SharersProps): ReactElement => {
  // console.log(title, url)
  return (
    <Styled.Sharers>
      <Styled.Sharer href='#'>
        <FontAwesomeIcon icon={faTwitter as IconProp} />
      </Styled.Sharer>
      <Styled.Sharer href='#'>
        <FontAwesomeIcon icon={faFacebook as IconProp} />
      </Styled.Sharer>
      <Styled.Sharer href='#'>
        <FontAwesomeIcon icon={faLinkedin as IconProp} />
      </Styled.Sharer>
      <Styled.Sharer href='#'>
        <FontAwesomeIcon icon={faEnvelope as IconProp} />
      </Styled.Sharer>
    </Styled.Sharers>
  )
}

export default Sharers
