import { useUpdateUserMutation } from '../../../services/users/userServices';

const ProfileUpdateForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser({ name, email })
      .unwrap()
      .then(() => {
        // Handle successful creation of user
      })
      .catch((error) => {
        // Handle error during creation of user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type='submit' disabled={isLoading}>
        {isLoading ? 'Updating profile...' : 'Save updates'}
      </button>
    </form>
  );
};

export default ProfileUpdateForm;
