import React, { FC, ReactElement, useEffect, useContext } from 'react'

import PageContext, { PageContextProps } from '@context/PageContext'

const SessionsPage: FC = (): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(7)
  }, [setActiveNavElement])
  
  return (
    <>GJ Sessions</>
  )
}

export default SessionsPage