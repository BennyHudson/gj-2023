import React, { ReactElement, FC } from 'react'

import * as Styled from './styles/Logo.style'

import { LogoProps } from './Logo.types'

const Logo: FC<LogoProps> = ({ inverse = false, gLogo = false }: LogoProps): ReactElement => {
  return (
    <Styled.Logo>
      <Styled.LogoLink href='/' $inverse={inverse} $gLogo={gLogo} />
    </Styled.Logo>
  )
}

export default Logo
