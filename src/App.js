import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './services/stores';
import Router from './services/router';

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
