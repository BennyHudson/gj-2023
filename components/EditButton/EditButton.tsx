import type { FC, ReactElement } from 'react'
import React from 'react'

import type { EditButtonProps } from './EditButton.types'
import * as Styled from './styles/EditButton.style'

const EditButton: FC<EditButtonProps> = ({ onClick, text, href, type }: EditButtonProps): ReactElement => {
  return (
    <Styled.EditButton as={onClick || type === 'submit' ? 'button' : 'a'} href={href} onClick={onClick} type={type}>
      {text}
    </Styled.EditButton>
  )
}

export default EditButton
