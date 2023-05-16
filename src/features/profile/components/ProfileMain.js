// MUI
import { Button, Card, Grid, Typography } from '@mui/material';

const ProfileMain = ({ user }) => {
  console.log(user);

  const {
    legalName: { first, last },
    address: { addressLineOne, city, state, zipCode },
    phoneNumebr,
  } = user;

  return (
    <Grid item>
      <Card>Profile Main</Card>
    </Grid>
  );
};

export default ProfileMain;
