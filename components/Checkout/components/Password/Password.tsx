import React, { ReactElement, FC } from 'react'

import TextField from '@components/TextField'
import EditButton from '@components/EditButton'

import { PasswordProps } from './Password.types'
import CheckoutPanel from '../CheckoutPanel'

const Password: FC<PasswordProps> = ({
  panelIndex,
  activePanel,
  setActivePanel,
}: PasswordProps): ReactElement => {
  return (
    <CheckoutPanel panelIndex={panelIndex} activePanel={activePanel} setActivePanel={setActivePanel} title='Create a password'> 
      <TextField isRequired label='Password' id='password' target='password' type='password' />
      <TextField isRequired label='Confirm Password' id='confirmPassword' target='confirmPassword' type='password' />
      <EditButton text='Continue' onClick={() => setActivePanel(activePanel + 1)} />
    </CheckoutPanel>
  )
}

export default Password
