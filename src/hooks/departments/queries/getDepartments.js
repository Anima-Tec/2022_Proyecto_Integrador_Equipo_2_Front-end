import { DepartmentService } from 'networking/services/DepartmentService'
import { useQuery } from 'react-query'

export const useDepartments = () => {
  const { isLoading, error, data, refetch } = useQuery(['getDepartments'], () =>
    DepartmentService.getDepartments(),
  )

  return { isLoading, error, data: data?.data, refetch }
}
