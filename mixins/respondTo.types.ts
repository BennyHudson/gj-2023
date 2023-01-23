import { FlattenSimpleInterpolation } from 'styled-components'

export interface MixinRespondToGeneric {
  (styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation
}

export type MixinRespondTo = {
  md: MixinRespondToGeneric
  lg: MixinRespondToGeneric
  xl: MixinRespondToGeneric
}

declare global {
  interface Window {
    sgBreakpoint: 'sm' | 'md' | 'lg' | 'xl'
  }
}
