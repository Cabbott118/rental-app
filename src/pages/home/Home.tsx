import React, { useState, useEffect } from 'react';
import { Container, Typography, useTheme } from '@mui/material';

interface HomePageProps {
  // Add any props you might need here
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const theme = useTheme();
  const [environment, setEnvironment] = useState('');

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setEnvironment('Development');
    } else if (process.env.NODE_ENV === 'production') {
      setEnvironment('Production');
    } else {
      console.log('Unknown environment');
    }
  }, []); // empty dependency array to run the effect only once after the initial render

  return (
    <Container maxWidth='lg'>
      <Typography variant='h2' color='primary'>
        Welcome to the Rental App - test
      </Typography>
      <Typography variant='body1'>This is the home page.</Typography>
      <Typography variant='body1'>Environment: {environment}</Typography>
    </Container>
  );
};

export default HomePage;
