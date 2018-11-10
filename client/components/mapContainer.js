import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker
          
          name="Current location"
        />

        <InfoWindow>
          <div>
            
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBd1vXWCMZcCA4ch9wfB_qrxzgPiDb2icw"),
})(MapContainer);
