import { useState } from 'react'

import useResetUserPasswordMutation from './mutations/useResetUserPasswordMutation'
import useSendPasswordResetEmailMutation from './mutations/useSendPasswordResetEmailMutation'

const errorCodes = {}

const useResetPassword = () => {
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('idle')
  const { sendPasswordResetEmail: emailMutation } = useSendPasswordResetEmailMutation()
  const { resetUserPassword: resetMutation } = useResetUserPasswordMutation()

  const sendResetPasswordEmail = (username: string) => {
    setError(null)
    setStatus('resolving')
    return emailMutation(username)
      .then(() => {
        setStatus('resolved')
      })
      .catch((errors) => {
        const message = errorCodes[errors.message] ? errorCodes[errors.message] : `Error: ${errors.message}`
        setError(message)
        setStatus('resolved')
      })
  }

  const resetUserPassword = (key, username, password) => {
    return resetMutation(key, username, password)
      .then(() => {
        setStatus('resolved')
      })
      .catch((errors) => {
        const message = errorCodes[errors.message] ? errorCodes[errors.message] : `Error: ${errors.message}`
        setError(message)
        setStatus('resolved')
      })
  }

  return {
    resetUserPassword,
    sendResetPasswordEmail,
    error,
    status,
  }
}

export default useResetPassword
