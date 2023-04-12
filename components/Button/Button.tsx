import type { FC, ReactElement } from 'react'
import React from 'react'

import type { ButtonProps } from './Button.types'
import * as Styled from './styles/Button.style'

const Button: FC<ButtonProps> = ({ onClick, text, type = 'button', href, size = 2 }: ButtonProps): ReactElement => {
  return (
    <Styled.Button href={href} onClick={onClick} type={type} as={href ? 'a' : 'button'} size={size}>
      {text}
    </Styled.Button>
  )
}

export default Button
