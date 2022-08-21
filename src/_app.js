import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, Preflight } from '@xstyled/styled-components';
import theme from 'config/theme';
import Authenticated from 'routers/authenticated';
import Unauthenticated from 'routers/unauthenticated';

export default function App() {
  const isAuthorized = false;

  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <BrowserRouter>
        {isAuthorized ? <Authenticated /> : <Unauthenticated />}
      </BrowserRouter>
    </ThemeProvider>
  );
}
