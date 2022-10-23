import { DepartmentService } from 'networking/services/DepartmentService'
import { useQuery } from 'react-query'

export const useDepartments = ({ where }) => {
  const { isLoading, error, data, refetch } = useQuery(['getDepartment'], () =>
    DepartmentService.getDepartment({ where }),
  )

  return { isLoading, error, data: data?.data, refetch }
}
