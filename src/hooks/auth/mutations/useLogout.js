import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, initialState } from 'contexts/auth'
import { clearSession } from 'utils/localStorage-helper'

export const useLogout = () => {
  const navigate = useNavigate()
  const { setState } = useAuth()

  useEffect(() => {
    setState(initialState)
    clearSession()
    navigate('/')
  }, [])
}
