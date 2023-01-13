import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { StyledGiftGuideFeatureProps } from './GiftGuideFeature.style.types'

type ThemeProps = Pick<StyledGiftGuideFeatureProps, 'theme'>

export const GiftGuideFeature = styled.div((props: StyledGiftGuideFeatureProps): FlattenSimpleInterpolation => css`
  position: relative;
  padding: ${props.theme.spacing[8]}px 0 0;
  background: ${props.theme.colours.black};
  display: flex;

  ${props.height === 1 && css`
    aspect-ratio: 3 / 2;
  `}

  ${props.height === 2 && css`
    height: calc(100vh - ${props.headerHeight}px);
  `}

  ${props.height === 3 && css`
    height: 100vh;
  `}

`)

export const Container = styled.div((props: ThemeProps): FlattenSimpleInterpolation => css`
  width: 90%;
  max-width: ${props.theme.containerWidth}px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: ${props.theme.spacing[4]}px;
  align-items: flex-end;
  z-index: 2;
`)

export const Content = styled.div((props: ThemeProps): FlattenSimpleInterpolation => css`
  padding: ${props.theme.spacing[4]}px 0 ${props.theme.spacing[8]}px ${props.theme.spacing[8]}px;
  border-left: 1px solid ${props.theme.colours.white};
  grid-column: col-start / span 7;
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[4]}px;
`)