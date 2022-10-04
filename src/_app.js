import { Suspense } from 'react'
import { useAuth } from 'contexts/auth'
import { BrowserRouter } from 'react-router-dom'
import { FullScreenLoader } from 'components/Loader'
import { Authenticated, Unauthenticated } from 'routers/index'

export default function App() {
  const { isAuthenticated } = useAuth()

  return (
    <BrowserRouter>
      <Suspense fallback={<FullScreenLoader />}>
        {isAuthenticated ? <Authenticated /> : <Unauthenticated />}
      </Suspense>
    </BrowserRouter>
  )
}
