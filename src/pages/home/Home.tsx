import React from 'react';

// MUI
import { Container, Typography, useTheme } from '@mui/material';

interface HomePageProps {
  // Add any props you might need here
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const theme = useTheme();
  return (
    <Container maxWidth='lg'>
      <Typography variant='h2' color='primary'>
        Welcome to the Rental App
      </Typography>
      <Typography variant='body1'>This is the home page.</Typography>
      <Typography variant='body1'>Feel free to explore!</Typography>
    </Container>
  );
};

export default HomePage;
