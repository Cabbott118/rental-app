import React, { useEffect, useState } from 'react';

// Firebase
import { auth } from '../utils/firebase';

// MUI
import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

const Navbar = () => {
  const theme = useTheme();

  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        setNavLinks([
          {
            name: 'Home',
            route: '/',
          },
          {
            name: 'Profile',
            route: `/profile/${user.uid}`,
          },
        ]);
      } else {
        setNavLinks([
          {
            name: 'Home',
            route: '/',
          },
          {
            name: 'Login',
            route: '/login',
          },
          { name: 'Sign Up', route: '/signup' },
        ]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <AppBar
          component='nav'
          color='transparent'
          position='static'
          sx={{ boxShadow: 'none' }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'right' }}>
            <Box
              sx={{
                display: {
                  sm: 'block',
                },
              }}
            >
              {navLinks.map((page) => (
                <Button
                  key={page.name}
                  href={page.route}
                  sx={{
                    color: theme.palette.text.primary,
                    textTransform: 'none',
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};

export default Navbar;
