import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../views/Home';

const Router = () => {

  return (
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  );
};

export default Router;
