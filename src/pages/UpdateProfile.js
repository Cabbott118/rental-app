// Components
import PageContainer from '../layouts/PageContainer';
import ProfileUpdateForm from '../features/profile/components/unregistered/ProfileUpdateForm';

// React Router
import { useParams } from 'react-router-dom';

const UpdateProfile = () => {
  const { userId } = useParams();

  return (
    <PageContainer maxWidth='xs'>
      <ProfileUpdateForm userId={userId} />
    </PageContainer>
  );
};

export default UpdateProfile;
