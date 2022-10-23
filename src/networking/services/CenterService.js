import { router } from '../axios'

export class CenterService {
  static async getCenter({ where: { id }, data: { accessToken } }) {
    return await router.get(`/centers/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }

  static async getCenters({ data: { accessToken } }) {
    return await router.get('/centers', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
}
