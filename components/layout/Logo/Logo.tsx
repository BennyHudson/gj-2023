import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import * as Styled from './styles/Logo.style'

import { LogoProps } from './Logo.types'

const Logo: FC<LogoProps> = ({
  inverse = false,
}: LogoProps): ReactElement => {
  return (
    <Styled.Logo>
      <Styled.LogoLink href='/' >
        <Image src={inverse ? '/svg/logo-inverse.svg' : '/svg/logo.svg'} width={230} height={36} alt={'Gentleman\'s Journal'} />
      </Styled.LogoLink>
    </Styled.Logo>
  )
}

export default Logo
