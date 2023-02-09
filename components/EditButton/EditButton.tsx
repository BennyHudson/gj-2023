import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/EditButton.style'

import { EditButtonProps } from './EditButton.types'

const EditButton: FC<EditButtonProps> = ({ onClick, text, href, type }: EditButtonProps): ReactElement => {
  return (
    <Styled.EditButton as={(onClick || type === 'submit') ? 'button' : 'a'} href={href} onClick={onClick} type={type}>
      {text}
    </Styled.EditButton>
  )
}

export default EditButton
