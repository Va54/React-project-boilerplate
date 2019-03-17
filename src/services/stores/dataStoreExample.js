import { observable, computed, action } from 'mobx';

class DataStore {
  @observable photos;

  constructor() {
    this.photos = [];
  }

  @computed
  get photosFromApi() {
    return this.photos;
  }

  @action getPhotos(photo) {
    this.photos = photo;
  }

}

export { DataStore };
export default new DataStore();
