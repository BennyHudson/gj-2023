import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import * as Styled from './styles/Logo.style'

import { LogoProps } from './Logo.types'

const Logo: FC<LogoProps> = ({ inverse = false, gLogo = false }: LogoProps): ReactElement => {
  return (
    <Styled.Logo gLogo={gLogo}>
      <Styled.LogoLink href='/' $inverse={inverse} $gLogo={gLogo} />
        {/* {gLogo ? (
          <Image priority src={inverse ? '/svg/logo-small-inverse.svg' : '/svg/logo-small.svg'} width={30} height={30} alt={'Gentleman\'s Journal'} />
        ) : (
          <Image priority src={inverse ? '/svg/logo-inverse.svg' : '/svg/logo.svg'} width={230} height={36} alt={'Gentleman\'s Journal'} />
        )}
      </Styled.LogoLink> */}
    </Styled.Logo>
  )
}

export default Logo
