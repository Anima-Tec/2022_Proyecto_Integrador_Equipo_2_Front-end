import { createContext, useContext, useState } from 'react'

import PropTypes from 'prop-types'
import SessionService from 'utils/localStorage-helper'

export const initialState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
}

export const AuthContext = createContext(initialState)

const loadState = () => {
  const user = SessionService.getCurrentUser()
  const storedAccessToken = SessionService.getLocalAccessToken()

  if (SessionService.isStoredAccesToken) {
    return {
      user,
      accessToken: storedAccessToken,
      isAuthenticated: true,
    }
  }

  return initialState
}

export const AuthProvider = ({ children }) => {
  const [{ user, accessToken, isAuthenticated }, setState] = useState(loadState)

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, accessToken, setState }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
