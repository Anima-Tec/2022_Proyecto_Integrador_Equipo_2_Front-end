import { useAuth } from 'contexts/auth'
import { CenterService } from 'networking/services/CenterService'
import { useQuery } from 'react-query'

export const useCenters = () => {
  const { accessToken } = useAuth()

  const { isLoading, error, data, refetch } = useQuery(['getCenters'], () =>
    CenterService.getCenters({ data: { accessToken } }),
  )

  return { isLoading, error, data: data?.data, refetch }
}
