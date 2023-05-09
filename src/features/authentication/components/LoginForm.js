import { MyButton, MyTextField } from '../../../lib/mui';
import { Box } from '@mui/material';

const LoginForm = ({
  emailData,
  passwordData,
  setEmail,
  setPassword,
  handleLogin,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
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
