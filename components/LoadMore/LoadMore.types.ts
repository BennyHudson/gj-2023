export interface LoadMoreProps {
  onClick: (() => void) | (() => Promise<void>)
  loading?: boolean
}
