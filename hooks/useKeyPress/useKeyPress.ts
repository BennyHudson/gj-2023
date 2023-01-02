import { useEffect, useState } from 'react'

export default function useKeyPress(): KeyboardEvent | undefined {
  const [keyboardEvent, setKeyboardEvent] = useState<KeyboardEvent>()

  const onKeydown = (event: KeyboardEvent): void => {
    setKeyboardEvent(event)
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeydown)
    return (): void => window.removeEventListener('keydown', onKeydown)
  })

  return keyboardEvent
}
