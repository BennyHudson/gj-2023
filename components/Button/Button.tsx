import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/Button.style'

import { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({
  onClick,
  text,
  type = 'button',
  href,
  size = 2,
}: ButtonProps): ReactElement => {
  return (
    <Styled.Button href={href} onClick={onClick} type={type} as={href ? 'a' : 'button'} size={size}>
      {text}
    </Styled.Button>
  )
}

export default Button
