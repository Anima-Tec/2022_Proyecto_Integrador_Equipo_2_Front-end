import { theme } from 'config/theme'
import { AuthProvider } from 'contexts/auth'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider, Preflight } from '@xstyled/styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '_app'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Preflight />
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
