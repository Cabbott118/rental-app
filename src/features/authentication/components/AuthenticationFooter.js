// MUI
import { Grid, Link } from '@mui/material';

const AuthenticationFooter = ({ type }) => {
  switch (type) {
    case 'Login':
      return (
        <Grid container>
          <Grid item xs>
            <Link href='/forgot-password' variant='body2'>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href='/signup' variant='body2'>
              Don't have an account? Sign up
            </Link>
          </Grid>
        </Grid>
      );

    case 'Sign up':
      return (
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Link href='/login' variant='body2'>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      );

    default:
      return;
  }
};

export default AuthenticationFooter;
