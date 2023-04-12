import type { FC, ReactElement } from 'react'
import React from 'react'

import type { LogoProps } from './Logo.types'
import * as Styled from './styles/Logo.style'

const Logo: FC<LogoProps> = ({ inverse = false, gLogo = false }: LogoProps): ReactElement => {
  return (
    <Styled.Logo>
      <Styled.LogoLink href='/' $inverse={inverse} $gLogo={gLogo} />
    </Styled.Logo>
  )
}

export default Logo
