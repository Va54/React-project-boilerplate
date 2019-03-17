import axios from 'axios';

class Http {
  constructor(headers, withCredentials) {
    this.axios = axios.create({
      baseURL: 'BASE URL',
      withCredentials,
      headers
    });
  }

  GET(URL) {
    return this.axios.get(URL);
  }

  POST(URL, DATA) {
    return this.axios.post(URL, DATA);
  }

  PUT(URL, DATA) {
    return this.axios.put(URL, DATA);
  }

  DELETE(URL, DATA) {
    return this.axios.delete(URL, DATA);
  }

  PATCH(URL, DATA) {
    return this.axios.patch(URL, DATA);
  }

}

const request = new Http({
  Authorization: `YOUR TOKEN`,
  'Content-Type': 'application/json'
}, true);

export { Http };
export default request;
