import { observable, action, computed } from 'mobx';

class AuthStore {
  @observable token;

  constructor() {
    this.token = '';
  }

  @computed
  get authToken() {
    return this.token;
  }

  @action setToken(token) {
    this.token = token;
  }
}

export { AuthStore };
export default new AuthStore();
