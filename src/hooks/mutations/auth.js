import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearSession } from 'utils/localStorage-helper';
import { useMutation } from 'react-query';
import { useAuth, initialState } from 'contexts/auth';
import { AuthService } from 'networking/services/AuthService';

export const useSignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const { mutate } = useMutation(
    data => AuthService.signUp(data.rol.toLowerCase(), data),
    {
      onSuccess: response => {
        setError('');
        navigate('/auth/login');
      },
      onError: ({ response: { data } }) => setError(data.message)
    }
  );

  return { mutate, error };
};

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { setState } = useAuth();

  const { mutate } = useMutation(data => AuthService.login(data), {
    onSuccess: ({ data: { accessToken, ...user } }) => {
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
      localStorage.setItem('user', JSON.stringify(user));

      setState(previousState => ({
        ...previousState,
        user,
        accessToken,
        isAuthenticated: true
      }));

      navigate(user.onboardingStepPosition === -1 ? '/home' : '/onboarding');
    },
    onError: ({ response: { data } }) => setError(data.message)
  });

  return { mutate, error };
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { setState } = useAuth();

  useEffect(() => {
    setState(initialState);
    clearSession();
    navigate('/');
  }, []);
};
