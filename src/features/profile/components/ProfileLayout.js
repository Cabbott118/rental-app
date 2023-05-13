// React Router
import { useParams } from 'react-router-dom';

// MUI
import { Grid, Typography } from '@mui/material';

// Hooks
import useFirebaseLogout from '../../authentication/hooks/useFirebaseLogout';

// Services
import { useGetUsersQuery } from '../../../services/users/userServices';

// Components
import ProfileMain from './ProfileMain';
import ProfileUpdateHeader from './unregistered/ProfileUpdateHeader';
import ProfileUpdateForm from './unregistered/ProfileUpdateForm';

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
    <Grid container>
      {data.isRegistered ? (
        <ProfileMain />
      ) : (
        <Grid item>
          <ProfileUpdateHeader />
          <ProfileUpdateForm userId={data.userId} />
        </Grid>
      )}
    </Grid>
  );
};

export default ProfileLayout;

{
  /* <Button color='warning' sx={{ textTransform: 'none' }} onClick={logout}>
  Logout
</Button>; */
}
