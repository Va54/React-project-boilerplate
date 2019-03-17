import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Example from '../views/Example';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Example}/>
    </Switch>
  );
};

export default Router;
