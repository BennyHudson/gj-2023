import React, { ReactElement, FC } from 'react'
import Image from 'next/image'

import * as Styled from './styles/Logo.style'

import { LogoProps } from './Logo.types'
import { useBreakpoints } from '@hooks/useBreakpoints'

const Logo: FC<LogoProps> = ({
  inverse = false,
  smLogo = false,
}: LogoProps): ReactElement => {
  const { sm } = useBreakpoints()
  return (
    <Styled.Logo>
      <Styled.LogoLink href='/'>
        {sm && smLogo ?
          <Image src={inverse ? '/svg/logo-small-inverse.svg' : '/svg/logo-small.svg'} width={30} height={30} alt={'Gentleman\'s Journal'} />
          :
          <Image src={inverse ? '/svg/logo-inverse.svg' : '/svg/logo.svg'} width={230} height={36} alt={'Gentleman\'s Journal'} />
        }        
      </Styled.LogoLink>
    </Styled.Logo>
  )
}

export default Logo
