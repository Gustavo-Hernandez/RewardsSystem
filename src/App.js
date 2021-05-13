import { BrowserRouter } from 'react-router-dom';
import useAuthentication from './hooks/useAuthentication';
import AuthNavigator from './navigation/AuthNavigator';
import AdminNavigator from './navigation/AdminNavigator';
import ClientNavigator from './navigation/ClientNavigator';
import VerificationNavigator from './navigation/VerificationNavigator';

function App() {
  const [isAuthenticated, isVerified, isAdmin] = useAuthentication();

  const setNavigator = () => {
    if (isAuthenticated) {
      if (isVerified) {
        if (isAdmin) {
          return <AdminNavigator />;
        }
        return <ClientNavigator />;
      }
      return <VerificationNavigator />;
    }
    return <AuthNavigator />;
  };
  const routes = setNavigator();
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
