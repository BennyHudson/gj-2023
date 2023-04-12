import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement } from 'react'
import React from 'react'

import type { NotificationProps } from './Notification.types'
import * as Styled from './styles/Notification.style'

const Notification: FC<NotificationProps> = ({ text, state }: NotificationProps): ReactElement => {
  return (
    <Styled.Notification state={state}>
      <FontAwesomeIcon icon={state === 'success' ? (faCheckCircle as IconProp) : (faExclamationCircle as IconProp)} />
      <span>{text}</span>
    </Styled.Notification>
  )
}

export default Notification
