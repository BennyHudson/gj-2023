import React, { ReactElement, FC, useState, Fragment } from 'react'
import AnimateHeight from 'react-animate-height'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp } from '@fortawesome/pro-light-svg-icons'

import * as Styled from './styles/Tabs.style'

import { TabsProps } from './Tabs.types'
import { useBreakpoints } from '@hooks/useBreakpoints'

const Tabs: FC<TabsProps> = ({ tabs }: TabsProps): ReactElement => {
  const [activeTab, setActiveTab] = useState(0)

  const { sm } = useBreakpoints()

  if (sm) {
    return (
      <>
        {tabs.map((tab, index) => {
          const isActive = activeTab === index
          return (
            <Styled.Accordion key={index}>
              <Styled.AccordionTitle onClick={() => setActiveTab(isActive ? null : index)}>
                {tab.title}
                <FontAwesomeIcon icon={isActive ? (faAngleUp as IconProp) : (faAngleDown as IconProp)} />
              </Styled.AccordionTitle>
              <AnimateHeight duration={500} height={isActive ? 'auto' : 0}>
                {tab.content}
              </AnimateHeight>
            </Styled.Accordion>
          )
        })}
      </>
    )
  }

  return (
    <>
      <Styled.Tabs tabCount={tabs.length}>
        {tabs.map((tab, index) => {
          return (
            <Styled.Tab key={index} $active={index === activeTab} onClick={() => setActiveTab(index)}>
              {tab.title}
            </Styled.Tab>
          )
        })}
      </Styled.Tabs>
      {tabs.map((tab, index) => {
        if (index !== activeTab) return
        return <Fragment key={index}>{tab.content}</Fragment>
      })}
    </>
  )
}

export default Tabs
