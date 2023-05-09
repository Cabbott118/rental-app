import { MyButton, MyTextField } from '../../../lib/mui';
import { Box } from '@mui/material';
// import { post } from '../../../lib/axios';
import axios from 'axios';
import { auth } from '../../../utils/firebase';

const LoginForm = ({
  emailData,
  passwordData,
  setEmail,
  setPassword,
  handleLogin,
}) => {
  console.log(auth);
  const createUserDocument = async (uid, email) => {
    const url =
      'http://127.0.0.1:5001/rental-app-60a86/us-central1/createUserDocument';
    try {
      const response = await axios.post(url, {
        uid,
        email,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating user document');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // handleLogin();
    createUserDocument(auth.currentUser.uid, emailData);
  };

  return (
    <Box component='form' onSubmit={handleSubmit}>
      <MyTextField
        id='email'
        label='Email Address'
        name='email'
        value={emailData}
        onChange={(e) => setEmail(e.target.value)}
      />
      <MyTextField
        id='password'
        label='Password'
        name='password'
        type='password'
        value={passwordData}
        onChange={(e) => setPassword(e.target.value)}
      />
      <MyButton text='Login' />
    </Box>
  );
};

export default LoginForm;
