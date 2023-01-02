import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/CheckboxList.style'

import { CheckboxListProps } from './CheckboxList.types'

const CheckboxList: FC<CheckboxListProps> = (props: CheckboxListProps): ReactElement => {
  console.log(props)
  return (
    <Styled.CheckboxList>
      Component CheckboxList
    </Styled.CheckboxList>
  )
}

export default CheckboxList
