/* eslint-disable react/prop-types */
import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useLogout } from 'hooks/auth/mutations/useLogout'
import { useCurrentUser } from 'hooks/user/queries/useCurrentUser'

const Home = lazy(() => import('pages/Home'))
const Onboarding = lazy(() => import('pages/Onboarding'))
const Page404 = lazy(() => import('pages/Error404'))

export function Authenticated() {
  const { isLoading, data: user } = useCurrentUser()

  return (
    !isLoading && (
      <Routes>
        {user?.onboardingStepPosition !== -1 ? (
          <>
            <Route
              exact
              path="/"
              element={<Navigate to={'/onboarding'} replace={true} />}
            />
            <Route exact path="/onboarding" element={<Onboarding />} />
          </>
        ) : (
          <>
            <Route
              exact
              path="/"
              element={<Navigate to={'/home'} replace={true} />}
            />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/auth/logout" element={<Logout />} />
          </>
        )}
        <Route exact path="*" element={<Page404 />} />
      </Routes>
    )
  )
}

const Logout = () => {
  useLogout()
}
