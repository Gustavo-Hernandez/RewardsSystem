import { BrowserRouter } from 'react-router-dom';
import useAuthentication from './hooks/useAuthentication';
import AuthNavigator from './navigation/AuthNavigator';
import ContentNavigator from './navigation/ContentNavigator';
import VerificationNavigator from './navigation/VerificationNavigator';

function App() {
  const [isAuthenticated, isVerified] = useAuthentication();

  const setNavigator = () => {
    if (isAuthenticated) {
      if (isVerified) {
        return <ContentNavigator />;
      }
      return <VerificationNavigator />;
    }
    return <AuthNavigator />;
  };
  const routes = setNavigator();
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
