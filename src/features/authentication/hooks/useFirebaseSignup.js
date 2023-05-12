import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { post } from '../../../lib/axios';
import { POST_USER } from '../../../data/constants';

const useFirebaseSignup = (email, password) => {
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
  }, [user]);

  const signup = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user: { email, uid } }) => {
        post(POST_USER, { email, uid });
        navigate(`/`);
      })
      .catch((firebaseError) => {
        setError(firebaseError);
        setIsLoading(false);
      });
  };

  return { user, error, isLoading, signup };
};

export default useFirebaseSignup;
