import { router } from '../axios'

export class AuthService {
  static async signUp(type, user) {
    return await router.post(`/auth/signup/${type.toLowerCase()}`, user)
  }

  static async login(user) {
    return await router.post('/auth/login', user)
  }

  static async logout(user) {
    return await router.post('/auth/logout', user)
  }
}
