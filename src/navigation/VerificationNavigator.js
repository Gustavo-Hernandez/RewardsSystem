import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Verification from '../pages/Verification';

const VerificationNavigator = () => {
  return (
    <Switch>
      <Route exact path='/verification' component={Verification} />
      <Route path='/' component={Verification} />
    </Switch>
  );
};
export default VerificationNavigator;
