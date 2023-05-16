// Components
import PageContainer from '../layouts/PageContainer';
import ProfileUpdateForm from '../features/profile/components/unregistered/ProfileUpdateForm';
import FormStepper from '../components/form/FormStepper';

// React Router
import { useParams } from 'react-router-dom';

const UpdateProfile = () => {
  const { userId } = useParams();

  return (
    <PageContainer maxWidth='xs'>
      {/* <ProfileUpdateForm userId={userId} /> */}
      <FormStepper userId={userId} />
    </PageContainer>
  );
};

export default UpdateProfile;
