import { router } from '../axios'

export class UserService {
  static async getCurrentUser({ where: { id, rol }, data: { accessToken } }) {
    return await router.get(`/${rol.toLowerCase()}s/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }

  static async updateUser({
    where: { id, rol },
    data: { accessToken, ...userData },
  }) {
    return await router.patch(`/${rol.toLowerCase()}s/${id}`, userData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }

  static async deleteUser({ where: { id, rol }, data: { accessToken } }) {
    return await router.delete(`/${rol.toLowerCase()}s/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
}
