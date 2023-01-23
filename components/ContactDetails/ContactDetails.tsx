import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/ContactDetails.style'

import { ContactDetailsProps } from './ContactDetails.types'

const ContactDetails: FC<ContactDetailsProps> = ({ children }: ContactDetailsProps): ReactElement => {
  return <Styled.ContactDetails>{children}</Styled.ContactDetails>
}

export default ContactDetails
