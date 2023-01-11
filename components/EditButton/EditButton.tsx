import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/EditButton.style'

import { EditButtonProps } from './EditButton.types'

const EditButton: FC<EditButtonProps> = ({
  onClick,
  text
}: EditButtonProps): ReactElement => {
  return (
    <Styled.EditButton onClick={onClick}>{text}</Styled.EditButton>
  )
}

export default EditButton
