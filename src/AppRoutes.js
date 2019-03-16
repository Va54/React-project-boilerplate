import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {App} from './views/App';
import Home from './views/Home';

export const AppRootRoute = () => {
  return (
    // The App component is always rendered - it determines what is displayed and handles the PreviewWelcome screen
    <Router>
      <Route path="/" component={App}/>
    </Router>
  );
};


export const AppRoutes = (
  <Switch>
    {/*<Route  exact path="/example" component={Home}/>*/}
  </Switch>
);


export default AppRootRoute;
