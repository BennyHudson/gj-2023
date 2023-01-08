export interface ButtonProps {
  text: string
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset'
  href?: string
  size?: 1 | 2
}
