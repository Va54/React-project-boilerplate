import { AuthStore } from '../../../services/stores/authStoreExample';

it('expect token to be empty', () => {
  const store = new AuthStore();
  expect(store.token).toMatch('');
});
