import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { AuthService } from 'networking/services/AuthService';

export const useSignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const { mutateAsync } = useMutation(
    data => AuthService.signUp(data.rol.toLowerCase(), data),
    {
      onSuccess: response => {
        setError('');
        navigate('/auth/login');
      },
      onError: ({ response: { data } }) => setError(data.message)
    }
  );

  return [mutateAsync, error];
};
