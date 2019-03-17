import React, { Component } from 'react';
import * as actions from '../services/actions';

class Login extends Component {
  componentWillMount() {
    actions.AuthRequest()
  }

  render() {
    return (<div>axsaxsx</div>);
  }
}
