import React, { ReactElement, FC, useState } from 'react'

import ModalTemplate from '@components/modals/ModalTemplate'
import LoginForm from '@components/forms/LoginForm'

import * as Styled from './styles/LoginModal.style'

import { LoginModalProps } from './LoginModal.types'

const LoginModal: FC<LoginModalProps> = ({
  // add props
}: LoginModalProps): ReactElement => {
  const [ tab, setTab ] = useState(0)
  return (
    <ModalTemplate image='https://www.thegentlemansjournal.com/wp-content/uploads/2022/12/John-Boyega-5-1.jpg'>
      <Styled.LoginModal>
        
        {tab === 0 && <LoginForm />}
      </Styled.LoginModal>
    </ModalTemplate>
  )
}

export default LoginModal
