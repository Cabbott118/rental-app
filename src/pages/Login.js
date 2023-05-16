import { useState } from 'react';

import PageContainer from '../layouts/PageContainer';
import LoginForm from '../features/authentication/components/LoginForm';
import useFirebaseLogin from '../features/authentication/hooks/useFirebaseLogin';
import AuthenticationHeader from '../features/authentication/components/AuthenticationHeader';
import AuthenticationFooter from '../features/authentication/components/AuthenticationFooter';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, error, isLoading, login } = useFirebaseLogin(email, password);

  const handleLogin = () => login();

  const pageType = 'Login';

  return (
    <PageContainer maxWidth='xs'>
      <AuthenticationHeader title={pageType} />
      <LoginForm
        emailData={email}
        passwordData={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        isLoading={isLoading}
      />
      <AuthenticationFooter type={pageType} />
    </PageContainer>
  );
};

export default Login;
