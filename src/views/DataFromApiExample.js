import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import actions from '../services/actions/dataRequestExample';

@inject('dataStore')
@observer
class DataFromApiExample extends Component {

  componentWillMount() {
    actions.dataRequest()
  }

  render() {
    const { dataStore } = this.props;
    const { photos } = dataStore;
    return (
      <div>
        <div className="text-center">
          <h2>Photos from API</h2>
          {photos.map((photo) => (
            <div key={photo.id}>
              <p> {photo.title}</p>
              <img src={photo.url} alt="example"/>
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default DataFromApiExample;
