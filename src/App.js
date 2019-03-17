import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppRoutes } from './services/routers';

class App extends Component {
  render() {
    return (
      <Provider>
        <HashRouter>
          {/* <HashRouter basename="/example"> */}
          {/* <Link to="/me"> it will render href="#/example/me" */}
          <AppRoutes/>
        </HashRouter>
      </Provider>
    );
  }
};

export default App;
