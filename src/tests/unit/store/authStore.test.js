import { AuthStore } from '../../../services/stores/auth_store';

describe('CommentStore', () => {
  describe('constructor()', () => {
    it('has an initial state', () => {
      const store = new AuthStore();
      expect(store.token.toJS()).to.be.empty;
    });
  });
});
