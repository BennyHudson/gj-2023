import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/EditButton.style'

import { EditButtonProps } from './EditButton.types'

const EditButton: FC<EditButtonProps> = ({ onClick, text, href }: EditButtonProps): ReactElement => {
  return (
    <Styled.EditButton as={onClick ? 'button' : 'a'} href={href} onClick={onClick}>
      {text}
    </Styled.EditButton>
  )
}

export default EditButton
