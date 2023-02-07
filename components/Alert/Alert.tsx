import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/Alert.style'

import { AlertProps } from './Alert.types'

const Alert: FC<AlertProps> = ({
  // add props
}: AlertProps): ReactElement => {
  return (
    <Styled.Alert>
      Component Alert
    </Styled.Alert>
  )
}

export default Alert
