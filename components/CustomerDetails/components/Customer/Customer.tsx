import React, { FC, ReactElement, useContext, useState } from 'react'

import Heading from '@components/Heading'
import EditButton from '@components/EditButton'
import ValueWithLabel from '@components/ValueWithLabel'

import PageContext, { PageContextProps } from '@context/PageContext'

import * as Styled from '../../styles/CustomerDetails.style'

const Customer: FC = (): ReactElement => {
  const { customer } = useContext(PageContext) as PageContextProps
  const [editMode, setEditMode] = useState(false)
  return (
    <Styled.DetailsBlock>
      <Styled.DetailsHeading>
        <Heading size={2} font='ChronicleCondensed' text='You' noMargin />
        {editMode && <EditButton text='Cancel' onClick={() => setEditMode(false)} />}
      </Styled.DetailsHeading>
      <ValueWithLabel label='First name' value={customer.first_name} />
      <ValueWithLabel label='Last name' value={customer.last_name} />
      <ValueWithLabel label='Email Address' value={customer.email} />
      {customer.billing.phone && <ValueWithLabel label='Telephone' value={customer.billing.phone} />}
      <EditButton onClick={() => setEditMode(true)} text='Edit these Details' />
    </Styled.DetailsBlock>
  )
}

export default Customer