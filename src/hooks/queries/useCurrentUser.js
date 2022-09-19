import { useAuth } from 'contexts/auth';
import { useState, useEffect } from 'react';
import { AuthService } from 'networking/services/AuthService';

export const useCurrentUser = () => {
  const {
    user: { id, rol }
  } = useAuth();

  const [{ isLoading = true, error, data }, setQuery] = useState({});

  useEffect(() => {
    AuthService.getCurrentUser({ where: { id, rol } })
      .then(({ data }) => {
        setQuery({
          data,
          isLoading: false,
          error: null
        });
      })
      .catch(({ data }) => {
        setQuery({
          data: null,
          isLoading: false,
          error: data
        });
      });
  }, []);

  return { isLoading, error, data };
};

// This doesn't render the data in the DOM
// TO-DO: research about this problem

// const {
//   user: { id, rol }
// } = useAuth();

// const { isLoading, error, data, refetch } = useQuery(['currentUser'], () =>
//   AuthService.getCurrentUser({
//     where: {
//       id,
//       rol
//     }
//   })
// );
