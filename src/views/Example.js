import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import actions from '../services/actions/authRequestExample';

@inject('authStore')
@observer
class Example extends Component {
  componentWillMount() {
    actions.authRequest();
  }

  render() {
    const { authStore } = this.props;
    const { authToken } = authStore;
    return (
      <div>
        {authToken && <span>Hello</span>}
        {!authToken && <span>Opps</span>}
      </div>
    );
  }

}

export default Example;
