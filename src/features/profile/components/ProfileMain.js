// React Router
import { useParams } from 'react-router-dom';

// MUI
import { Button } from '@mui/material';

// Hooks
import useFirebaseLogout from '../../authentication/hooks/useFirebaseLogout';

// Services
import { useGetUsersQuery } from '../../../services/users/userServices';

const ProfileMain = () => {
  const { userId } = useParams();
  const { data, error, isLoading } = useGetUsersQuery(userId);
  console.log(data);

  const { logout } = useFirebaseLogout();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <p>{data.email}</p>
        <p>{data.isRegistered.toString()}</p>
        <p>{data.userId}</p>
      </div>

      <Button color='warning' sx={{ textTransform: 'none' }} onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default ProfileMain;
