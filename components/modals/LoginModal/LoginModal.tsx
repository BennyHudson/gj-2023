import React, { ReactElement, FC, useState } from 'react'

import ModalTemplate from '@components/modals/ModalTemplate'
import LoginForm from '@components/forms/LoginForm'

import * as Styled from './styles/LoginModal.style'

import { LoginModalProps } from './LoginModal.types'

const LoginModal: FC<LoginModalProps> = (): ReactElement => {
  const [ activeTab, setActiveTab ] = useState(0)

  const tabs = [
    {
      title: 'Login',
    },
    {
      title: 'Subscribe',
    }
  ]

  return (
    <ModalTemplate image='https://www.thegentlemansjournal.com/wp-content/uploads/2022/12/John-Boyega-5-1.jpg'>
      <Styled.LoginModal>
        <Styled.Tabs>
          {tabs.map((tab, index) => {
            return (
              <Styled.Tab key={index} onClick={() => setActiveTab(index)} $active={index === activeTab}>{tab.title}</Styled.Tab>
            )
          })}
        </Styled.Tabs>
        {activeTab === 0 && <LoginForm />}
      </Styled.LoginModal>
    </ModalTemplate>
  )
}

export default LoginModal
