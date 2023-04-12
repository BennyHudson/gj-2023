import { Field } from 'formik'
import type { FlattenSimpleInterpolation} from 'styled-components'
import styled, { css } from 'styled-components'

export const TextField = styled(Field)(
  (): FlattenSimpleInterpolation => css`
    &[type='password'] {
      letter-spacing: 4px;
    }
  `,
)
