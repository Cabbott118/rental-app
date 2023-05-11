import { useState, useEffect } from 'react';
import { auth } from '../../../utils/firebase';
import { useNavigate } from 'react-router-dom';

const useFirebaseLogout = () => {
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
  }, []);

  const logout = () => {
    setIsLoading(true);
    auth
      .signOut()
      .then(() => {
        setIsLoading(false);
        setUser(null);
        navigate('/login');
      })
      .catch((firebaseError) => {
        setError(firebaseError);
        setIsLoading(false);
      });
  };

  return { user, error, isLoading, logout };
};

export default useFirebaseLogout;
