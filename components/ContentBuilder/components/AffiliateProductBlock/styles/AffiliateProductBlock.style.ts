import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledAffiliateProductBlockProps } from './AffiliateProductBlock.style.types'

export const AffiliateProductBlock = styled.div(
  (props: StyledAffiliateProductBlockProps): FlattenSimpleInterpolation => css`
    grid-column: col-start / span 12;
    display: grid;
    gap: ${props.theme.spacing[4]}px;
    grid-template-columns: repeat(1, 1fr);
    border-top: 1px solid ${props.theme.colours.midGrey};
    border-bottom: 1px solid ${props.theme.colours.midGrey};
    padding: ${props.theme.spacing[4]}px;

    ${respondTo.md(css`
      grid-template-columns: repeat(${props.productCount}, 1fr);
      padding: ${props.theme.spacing[4]}px 0;
    `)}
  `,
)

type ProductProps = Pick<StyledAffiliateProductBlockProps, 'theme'>
export const Product = styled.div(
  (props: ProductProps): FlattenSimpleInterpolation => css`
    display: flex;
    gap: ${props.theme.spacing[2]}px;
    flex-direction: column;
  `,
)
