import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ClientHome from '../pages/ClientHome';
import Profile from '../pages/Profile';

const ClientNavigator = () => {
  return (
    <Switch>
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/dashboard' component={ClientHome} />
      <Route path='/' component={ClientHome} />
    </Switch>
  );
};
export default ClientNavigator;
