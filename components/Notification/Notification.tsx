import React, { ReactElement, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/pro-light-svg-icons'

import * as Styled from './styles/Notification.style'

import { NotificationProps } from './Notification.types'

const Notification: FC<NotificationProps> = ({ text, state }: NotificationProps): ReactElement => {
  return (
    <Styled.Notification state={state}>
      <FontAwesomeIcon icon={state === 'success' ? (faCheckCircle as IconProp) : (faExclamationCircle as IconProp)} />
      <span>{text}</span>
    </Styled.Notification>
  )
}

export default Notification
