import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import actions from '../services/actions';

@inject('authStore')
@observer
class Home extends Component {
  componentWillMount() {
    actions.authRequest();
  }

  render() {
    const { authStore } = this.props;
    const { authToken } = authStore;
    return (
      <div>
        {authToken && <span>Hello</span>}
      </div>
    );
  }

}

export default Home;
