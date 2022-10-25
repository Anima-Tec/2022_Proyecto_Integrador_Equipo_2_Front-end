import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useAuth } from 'contexts/auth'
import { AuthService } from 'networking/services/AuthService'
import toast from 'react-hot-toast'

export const useLogin = () => {
  const navigate = useNavigate()
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

      toast.success('Login exitoso')

      navigate(user.onboardingStepPosition !== -1 ? '/onboarding' : '/')
    },
    onError: ({ response: { data } }) => toast.error(data.message),
  })

  return { mutateAsync }
}
