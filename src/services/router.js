import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Example from '../views/Example';
import DataFromApiExample from '../views/DataFromApiExample';

const Router = () => {
  return (
    <Switch>
      <Route path="/photos" component={DataFromApiExample}/>
      <Route path="/" component={Example}/>
    </Switch>
  );
};

export default Router;
