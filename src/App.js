import { ThemeProvider, Preflight, x } from '@xstyled/styled-components';
import theme from './config/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <x.div>Index</x.div>
    </ThemeProvider>
  );
}
