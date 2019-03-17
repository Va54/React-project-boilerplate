import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './services/stores';
import Router from './services/router';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <HashRouter>
          {/* <HashRouter basename="/example"> */}
          {/* <Link to="/me"> it will render href="#/example/me" */}
          <Router/>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
