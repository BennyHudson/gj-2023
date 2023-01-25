import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/ContactDetails.style'

import { ContactDetailsProps } from './ContactDetails.types'

const ContactDetails: FC<ContactDetailsProps> = ({ contactDetails }: ContactDetailsProps): ReactElement => {
  console.log(contactDetails)
  return <Styled.ContactDetails>Hello</Styled.ContactDetails>
}

export default ContactDetails
