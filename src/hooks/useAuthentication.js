import { auth } from '../api/firebase';
import { useEffect, useState } from 'react';

const useAuthentication = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [isVerified, setVerification] = useState(false);
  const [isAdmin, setAdmin] = useState(true);
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
        if (idToken.claims.admin !== undefined) {
          if (idToken.claims.admin) {
            setAdmin(true);
          } else {
            setAdmin(false);
          }
        }
      } else {
        setAuthentication(false);
        setVerification(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [isAuthenticated, isVerified, isAdmin]);

  return [isAuthenticated, isVerified, isAdmin];
};

export default useAuthentication;
