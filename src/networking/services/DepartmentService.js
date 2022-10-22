import { router } from '../axios'

export class DepartmentService {
  static async getDepartment({ where: { id } }) {
    return await router.get(`/departments/${id}`)
  }

  static async getDepartments() {
    return await router.get('/departments')
  }
}
