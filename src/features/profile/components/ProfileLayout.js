// React Router
import { useParams } from 'react-router-dom';

// MUI
import { Button, Grid } from '@mui/material';

// Hooks
import useFirebaseLogout from '../../authentication/hooks/useFirebaseLogout';

// Services
import { useGetUsersQuery } from '../../../services/users/userServices';

// Components
import ProfileMain from './ProfileMain';
import ProfileUpdateHeader from './unregistered/ProfileUpdateHeader';

const ProfileLayout = () => {
  const { userId } = useParams();
  const { data, error, isLoading } = useGetUsersQuery(userId);

  const { logout } = useFirebaseLogout();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      {data.isRegistered ? (
        <ProfileMain user={data} />
      ) : (
        <Grid item>
          <ProfileUpdateHeader userId={data.userId} />
        </Grid>
      )}
      <Button color='error' sx={{ textTransform: 'none' }} onClick={logout}>
        Logout
      </Button>
    </Grid>
  );
};

export default ProfileLayout;

{
}
