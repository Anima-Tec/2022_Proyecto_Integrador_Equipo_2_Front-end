import { useAuth } from 'contexts/auth'
import { CenterService } from 'networking/services/CenterService'
import { useQuery } from 'react-query'

export const useCenter = ({ where }) => {
  const { accessToken } = useAuth()

  const { isLoading, error, data, refetch } = useQuery(['getCenter'], () =>
    CenterService.getCenter({
      where,
      data: { accessToken },
    }),
  )

  return { isLoading, error, data: data?.data, refetch }
}
