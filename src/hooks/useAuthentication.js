import { auth } from '../api/firebase';
import { useEffect, useState, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const useAuthentication = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [isVerified, setVerification] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const { setEmail } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idToken = await user.getIdTokenResult();
        setEmail(idToken.claims.email);
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
    // eslint-disable-next-line
  }, [isAuthenticated, isVerified, isAdmin]);

  return [isAuthenticated, isVerified, isAdmin];
};

export default useAuthentication;
