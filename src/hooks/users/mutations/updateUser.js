import { useState } from 'react'
import { useMutation } from 'react-query'
import { useAuth } from 'contexts/auth'
import { UserService } from 'networking/services/UserService'
import { useCurrentUser } from 'hooks/users/queries/getCurrentUser'
import SessionService from 'utils/localStorage-helper'

export const useUpdateUser = () => {
  const [error, setError] = useState('')
  const { data: user } = useCurrentUser()
  const { accessToken, setState } = useAuth()

  const { mutateAsync } = useMutation(
    data =>
      UserService.updateUser({
        where: {
          id: user.id,
          rol: user.rol,
        },
        data: { ...data, accessToken },
      }),
    {
      onSuccess: ({ data }) => {
        setState(previousData => ({
          ...previousData,
          user: { ...previousData.user, ...data },
        }))
        SessionService.updateLocalUser(data)
      },
      onError: ({ response }) => setError(response?.data?.message),
    },
  )

  return { mutateAsync, error }
}
