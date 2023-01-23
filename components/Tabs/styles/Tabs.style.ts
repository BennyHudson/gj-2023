import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledTabsProps } from './Tabs.style.types'

export const Tabs = styled.div(
  (props: StyledTabsProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(${props.tabCount}, 1fr);
    margin-bottom: ${props.theme.spacing[8]}px;
    width: 100%;
    border-bottom: 1px solid ${props.theme.colours.midGrey};
  `,
)

export const Tab = styled.button(
  (props: StyledTabsProps): FlattenSimpleInterpolation => css`
    background: none;
    font-family: 'Cera Pro Semibold';
    padding: ${props.theme.spacing[2]}px ${props.theme.spacing[4]}px;
    border: none;
    border-bottom: 1px solid ${props.theme.colours.white};
    font-size: ${props.theme.typography.heading[1].fontSize};
    line-height: ${props.theme.typography.heading[1].lineHeight};
    cursor: pointer;

    ${props.$active &&
    css`
      border-bottom: 1px solid ${props.theme.colours.black};
    `}
  `,
)

export const Accordion = styled.div(
  (props: StyledTabsProps): FlattenSimpleInterpolation => css`
    margin-bottom: ${props.theme.spacing[2]}px;

    &:last-child {
      margin-bottom: 0;
    }
  `,
)

export const AccordionTitle = styled.button(
  (props: StyledTabsProps): FlattenSimpleInterpolation => css`
    background: none;
    padding: ${props.theme.spacing[1]}px 0;
    border: none;
    border-bottom: 1px solid ${props.theme.colours.midGrey};
    width: 100%;
    text-align: left;
    font-family: 'Cera Pro Semibold';
    font-size: ${props.theme.typography.heading[1].fontSize};
    line-height: ${props.theme.typography.heading[1].lineHeight};
    margin-bottom: ${props.theme.spacing[2]}px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      height: 16px;
    }
  `,
)
