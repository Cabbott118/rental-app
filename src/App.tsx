// Routing
import { ROUTES } from 'resources/routes-constants';
import {
  BrowserRouter as Router,
  // Outlet,
  Route,
  Routes,
} from 'react-router-dom';

// MUI
import {
  Container,
  Typography,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';

// Pages
import HomePage from 'pages/home/Home';

// Styles
import { theme } from 'styles/theme';
import 'App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path={ROUTES.HOMEPAGE_ROUTE}>
            <Route index element={<HomePage />} />
            <Route
              path='*'
              element={
                <Container maxWidth='sm'>
                  <Typography variant='h2'>404 Not Found</Typography>
                  <Typography variant='body1'>
                    You'll have to journey elsewhere.
                  </Typography>
                </Container>
              }
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
