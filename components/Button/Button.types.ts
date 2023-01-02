export interface ButtonProps {
  text: string
  onClick?: () => void
  type?: 'submit' | 'button' | 'reset'
}
