import { theme } from 'config/theme'
import { AuthProvider } from 'contexts/auth'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider, Preflight } from '@xstyled/styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Preflight />
        <AuthProvider>
          <GoogleOAuthProvider
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          >
            <App />
          </GoogleOAuthProvider>
        </AuthProvider>
      </ThemeProvider>
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  </React.StrictMode>,
)
