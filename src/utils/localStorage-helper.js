export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export const updateLocalUser = data => {
  localStorage.setItem('user', JSON.stringify(data))
}

export const getLocalAccessToken = () => {
  const accessToken =
    localStorage.getItem('accessToken') &&
    JSON.parse(localStorage.getItem('accessToken'))

  return accessToken
}

export const updateLocalAccessToken = token => {
  localStorage.setItem('accessToken', JSON.stringify(token))
}

export const clearSession = () => {
  localStorage.clear()
}

export const isStoredAccesToken = !!getLocalAccessToken()

const SessionService = {
  getCurrentUser,
  updateLocalUser,
  getLocalAccessToken,
  updateLocalAccessToken,
  clearSession,
  isStoredAccesToken,
}

export default SessionService
