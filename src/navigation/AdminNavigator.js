import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AdminNavigator = () => {
  return (
    <Switch>
      <Route exact path='/dashboard' component={Home} />
      <Route path='/' component={Home} />
      {/* TODO: Replace for Page not found*/}
    </Switch>
  );
};
export default AdminNavigator;
