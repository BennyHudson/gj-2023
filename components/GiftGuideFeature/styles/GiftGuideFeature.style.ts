import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledGiftGuideFeatureProps } from './GiftGuideFeature.style.types'

type ThemeProps = Pick<StyledGiftGuideFeatureProps, 'theme'>

export const GiftGuideFeature = styled.div((props: StyledGiftGuideFeatureProps): FlattenSimpleInterpolation => css`
  position: relative;
  padding: ${props.theme.spacing[8]}px 0 0;
  background: ${props.theme.colours.black};
  height: calc(100vh - ${props.headerHeight}px);
  display: flex;
`)

export const Container = styled.div((props: ThemeProps): FlattenSimpleInterpolation => css`
  width: 90%;
  max-width: ${props.theme.containerWidth}px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: ${props.theme.spacing[4]}px;
  align-items: flex-end;
`)

export const Content = styled.div((props: ThemeProps): FlattenSimpleInterpolation => css`
  padding: ${props.theme.spacing[4]}px 0 ${props.theme.spacing[8]}px ${props.theme.spacing[8]}px;
  border-left: 1px solid ${props.theme.colours.white};
  grid-column: col-start / span 7;
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[4]}px;
`)