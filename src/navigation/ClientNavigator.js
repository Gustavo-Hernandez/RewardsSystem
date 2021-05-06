import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

const ClientNavigator = () => {
  return (
    <Switch>
      <Route exact path='/dashboard' component={Home} />
      <Route path='/' component={Home} />
    </Switch>
  );
};
export default ClientNavigator;
