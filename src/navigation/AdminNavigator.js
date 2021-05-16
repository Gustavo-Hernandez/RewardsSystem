import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminHome from '../pages/AdminHome';
import Product from '../pages/Product';

const AdminNavigator = () => {
  return (
    <Switch>
      <Route exact path='/product' component={Product} />
      <Route exact path='/dashboard' component={AdminHome} />
      <Route path='/' component={AdminHome} />
      {/* TODO: Replace for Page not found*/}
    </Switch>
  );
};
export default AdminNavigator;
