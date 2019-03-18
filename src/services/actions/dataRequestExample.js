import dataStore from '../stores/dataStoreExample';
import http from '../managers/request';

const dataRequest = () => {
  http.GET('https://jsonplaceholder.typicode.com/photos').then((res) => {
    dataStore.setPhotos(res.data.slice(1, 5));
  }).catch((e) => {
    console.log(e);
  });
};

export default {
  dataRequest
};
