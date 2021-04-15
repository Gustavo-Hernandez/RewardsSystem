import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import PasswordForgot from '../pages/PasswordForgot';
import Register from '../pages/Register';

const AuthNavigator = () => {
  return (
    <Switch>
      <Route path='/password-forgot' component={PasswordForgot} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/' component={Login} />
    </Switch>
  );
};
export default AuthNavigator;
