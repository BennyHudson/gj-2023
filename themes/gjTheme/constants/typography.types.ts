export type ParagraphKeys = 1 | 2 | 3
export type HeadingKeys = 1 | 2 | 3 | 4 | 5 | 6
export type WeightKeys = 1 | 2 | 3

export interface TypographyValues {
  fontSizeMobile: string
  lineHeightMobile: string
  fontSize: string
  lineHeight: string
}

export type Paragraph = {
  [P in ParagraphKeys]: TypographyValues
}

export type Heading = {
  [P in HeadingKeys]: TypographyValues
}

export interface Typography {
  paragraph: Paragraph
  heading: Heading
  fontWeight: {
    [P in WeightKeys]: number
  }
  fontFamily: string
}
