import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useAuth } from 'contexts/auth'
import { AuthService } from 'networking/services/AuthService'

export const useLogin = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { setState } = useAuth()

  const { mutateAsync } = useMutation(data => AuthService.login(data), {
    onSuccess: ({ data: { accessToken, ...user } }) => {
      localStorage.setItem('accessToken', JSON.stringify(accessToken))
      localStorage.setItem('user', JSON.stringify(user))

      setState({
        user,
        accessToken,
        isAuthenticated: true,
      })

      navigate('/')
    },
    onError: ({ response: { data } }) => setError(data.message),
  })

  return [mutateAsync, error]
}
