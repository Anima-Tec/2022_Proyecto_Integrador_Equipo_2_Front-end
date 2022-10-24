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

  static async createFood({
    where: { centerId },
    data: { accessToken, ...dataFood },
  }) {
    return await router.post(`/centers/${centerId}/foods`, dataFood, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }

  static async updateFood({
    where: { centerId, foodId },
    data: { accessToken, ...dataFood },
  }) {
    return await router.patch(
      `/centers/${centerId}/foods/${foodId}`,
      dataFood,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )
  }

  static async deleteFood({
    where: { centerId, foodId },
    data: { accessToken },
  }) {
    return await router.delete(`/centers/${centerId}/foods/${foodId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
}
