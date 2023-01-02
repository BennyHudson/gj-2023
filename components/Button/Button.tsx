import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/Button.style'

import { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({
  onClick,
  text,
  type = 'button',
}: ButtonProps): ReactElement => {
  return (
    <Styled.Button onClick={onClick} type={type}>
      {text}
    </Styled.Button>
  )
}

export default Button
