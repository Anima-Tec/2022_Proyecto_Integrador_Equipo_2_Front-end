import { createContext, useContext, useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import SessionService from 'utils/localStorage-helper';
import { applyInterceptors, clearInterceptors } from 'networking/axios';

export const initialState = {
  user: null,
  accessToken: null,
  isAuthenticated: false
};

export const AuthContext = createContext(initialState);

const loadState = () => {
  const user = SessionService.getCurrentUser();
  const storedAccessToken = SessionService.getLocalAccessToken();

  if (SessionService.isStoredAccesToken) {
    return {
      user,
      accessToken: storedAccessToken,
      isAuthenticated: true
    };
  }

  return initialState;
};

export const AuthProvider = ({ children }) => {
  const [{ user, accessToken, isAuthenticated }, setState] = useState(
    loadState()
  );

  useEffect(() => {
    const interceptors = applyInterceptors(accessToken);

    return () => clearInterceptors(interceptors);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setState }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useAuth = () => useContext(AuthContext);
