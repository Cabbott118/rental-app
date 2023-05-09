// MUI
import { ThemeProvider } from '@emotion/react';
import theme from './utils/theme';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
      <Signup />
    </ThemeProvider>
  );
}

export default App;
