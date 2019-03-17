import authStore from '../stores/authStoreExample';
import http from '../managers/request';

const authRequest = () => {
  http.GET('URL').then((res) => {
    authStore.setToken(res.data);
  }).catch((e) => {
    console.log(e);
  });
};

export default {
  authRequest
};
