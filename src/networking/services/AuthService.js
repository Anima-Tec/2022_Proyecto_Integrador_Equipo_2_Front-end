import { router } from '../axios';

export class AuthService {
  static signUp(type, user) {
    return router.post(`/auth/signup/${type.toLowerCase()}`, user);
  }

  static async login(user) {
    return await router.post('/auth/login', user);
  }

  static async logout(user) {
    return await router.post('/auth/logout', user);
  }
}
