// MUI
import { Box } from '@mui/material';
import { MyButton, MyTextField } from '../../../lib/mui';

const LoginForm = ({
  emailData,
  passwordData,
  setEmail,
  setPassword,
  handleLogin,
  isLoading,
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
      <MyButton fullWidth text='Login' loading={isLoading} />
    </Box>
  );
};

export default LoginForm;
