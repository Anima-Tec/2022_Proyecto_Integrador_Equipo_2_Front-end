import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useLogout } from 'hooks/auth/mutations/useLogout'
import { useCurrentUser } from 'hooks/users/queries/getCurrentUser'
import { FullScreenLoader } from 'components/Loader'

const Dashboard = lazy(() => import('pages/Dashboard'))
const Onboarding = lazy(() => import('pages/Onboarding'))
const Page404 = lazy(() => import('pages/Error404'))

export function Authenticated() {
  const { isLoading, data: user } = useCurrentUser()

  return (
    <Suspense fallback={<FullScreenLoader />}>
      {!isLoading && (
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
                element={<Navigate to={'/dashboard'} replace={true} />}
              />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/auth/logout" element={<Logout />} />
            </>
          )}
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      )}
    </Suspense>
  )
}

const Logout = () => {
  useLogout()
}
