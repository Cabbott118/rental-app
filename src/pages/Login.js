import { useState } from 'react';

import PageContainer from '../layouts/PageContainer';
import LoginForm from '../features/authentication/components/LoginForm';
import useFirebaseLogin from '../features/authentication/hooks/useFirebaseLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, error, isLoading, login } = useFirebaseLogin(email, password);

  const handleLogin = () => login();

  return (
    <PageContainer>
      <LoginForm
        emailData={email}
        passwordData={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </PageContainer>
  );
};

export default Login;
