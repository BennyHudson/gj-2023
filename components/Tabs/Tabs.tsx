import React, { ReactElement, FC, useState } from 'react'

import * as Styled from './styles/Tabs.style'

import { TabsProps } from './Tabs.types'

const Tabs: FC<TabsProps> = ({
  tabs,
}: TabsProps): ReactElement => {
  const [ activeTab, setActiveTab ] = useState(0)

  return (
    <>
      <Styled.Tabs tabCount={tabs.length}>
        {tabs.map((tab, index) => {
          return (
            <Styled.Tab key={index} $active={index === activeTab} onClick={() => setActiveTab(index)}>{tab.title}</Styled.Tab>
          )
        })}
      </Styled.Tabs>
      {tabs.map((tab, index) => {
        if (index !== activeTab) return
        return (
          <>
            {tab.content}
          </>
        )
      })}
    </>
  )
}

export default Tabs
