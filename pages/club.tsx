import React, { FC, ReactElement, useEffect, useContext } from 'react'

import PageContext, { PageContextProps } from '@context/PageContext'

const ClubPage: FC = (): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(8)
  }, [setActiveNavElement])
  
  return (
    <>Club</>
  )
}

export default ClubPage