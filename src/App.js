// React Router
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/routes';

// MUI
import { ThemeProvider } from '@emotion/react';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
