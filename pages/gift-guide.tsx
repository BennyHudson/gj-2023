import React, { FC, ReactElement, useEffect, useContext } from 'react'

import PageContext, { PageContextProps } from '@context/PageContext'

const GiftGuidePage: FC = (): ReactElement => {
  const { setActiveNavElement } = useContext(PageContext) as PageContextProps

  useEffect(() => {
    setActiveNavElement(2)
  }, [setActiveNavElement])
  
  return (
    <>Gift Guide</>
  )
}

export default GiftGuidePage