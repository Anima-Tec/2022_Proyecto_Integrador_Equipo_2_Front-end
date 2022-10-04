import { useAuth } from 'contexts/auth';
import { UserService } from 'networking/services/UserService';
import { useQuery } from 'react-query';

export const useCurrentUser = () => {
  const {
    user: { id, rol },
    accessToken
  } = useAuth();

  const { isLoading, error, data, refetch } = useQuery(['currentUser'], () =>
    UserService.getCurrentUser({
      where: {
        id,
        rol
      },
      data: { accessToken }
    })
  );

  return { isLoading, error, data: data?.data, refetch };
};
