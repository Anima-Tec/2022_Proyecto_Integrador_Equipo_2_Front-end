import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { AuthService } from 'networking/services/AuthService'
import toast from 'react-hot-toast'

export const useSignUp = () => {
  const navigate = useNavigate()

  const { mutateAsync } = useMutation(
    data => AuthService.signUp(data.rol.toLowerCase(), data),
    {
      onSuccess: response => {
        navigate('/auth/login')
        toast.success('Registro exitoso')
      },
      onError: ({ response: { data } }) => toast.error(data.message),
    },
  )

  return { mutateAsync }
}
