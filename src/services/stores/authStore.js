import { observable, action } from 'mobx';

class AuthStore {
  @observable token = '';

  @action setToken(token) {
    this.token = token
  }
}

export default new AuthStore();
