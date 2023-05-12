import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import { useNavigate } from 'react-router-dom';

const useFirebaseLogin = (email, password) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = auth.onAuthStateChanged(
      (firebaseUser) => {
        setIsLoading(false);
        setUser(firebaseUser);
      },
      (firebaseError) => {
        setIsLoading(false);
        setError(firebaseError);
      }
    );

    return () => unsubscribe();
  }, [auth]);

  const login = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user: { uid } }) => {
        navigate('/');
      })
      .catch((firebaseError) => {
        setError(firebaseError);
        setIsLoading(false);
      });
  };

  return { user, error, isLoading, login };
};

export default useFirebaseLogin;
