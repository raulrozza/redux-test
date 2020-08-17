import React from 'react';
import { Switch } from 'react-router-dom';
import Private from './Private';

// Pages
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Private path="/" exact component={Login} />
      <Private path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
