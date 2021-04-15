import { auth } from '../api/firebase';
import { useEffect, useState } from 'react';

const useAuthentication = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [isVerified, setVerification] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idToken = await user.getIdTokenResult();
        if (idToken) {
          setAuthentication(true);
        } else {
          setAuthentication(false);
        }
        if (user.emailVerified) {
          setVerification(true);
        } else {
          setVerification(false);
        }
      } else {
        setAuthentication(false);
        setVerification(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [isAuthenticated, isVerified]);

  return [isAuthenticated, isVerified];
};

export default useAuthentication;
