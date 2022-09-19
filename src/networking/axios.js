import axios from 'axios';
import { clearSession } from 'utils/localStorage-helper';

export const router = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  params: {}
});

export const applyInterceptors =
  (router,
  accessToken => {
    const requestInterceptor = router.interceptors.request.use(
      req => {
        req.headers.Authorization = `Bearer ${accessToken}`;
        return req;
      },
      error => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = router.interceptors.response.use(
      res => res,
      error => {
        if (
          error.response?.status === 401 ||
          (error.response?.status === 409 &&
            error.response?.data?.name === 'JsonWebTokenError')
        ) {
          clearSession();
        }

        return Promise.reject(error);
      }
    );

    return { requestInterceptor, responseInterceptor };
  });

export const clearInterceptors =
  (router,
  interceptors => {
    const { requestInterceptor, responseInterceptor } = interceptors;

    router.interceptors.request.eject(requestInterceptor);
    router.interceptors.response.eject(responseInterceptor);
  });
