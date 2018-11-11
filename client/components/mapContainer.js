import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

  constructor() {
    super();
    
    this.state = {
      currentLocation: {
        lat: 41.7658,
        lng: -72.6734,
      }
    };
  }

  componentDidMount(){
    console.log(this.state);
    
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          this.setState({
              currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude
              }
          })
      })
  }
  }


  render() {
    return (
      <Map google={this.props.google} zoom={14} 
        initialCenter={{
          lat: this.state.currentLocation.lat,
          lng: this.state.currentLocation.lng,
        }}
        center={{
          lat: this.state.currentLocation.lat,
          lng: this.state.currentLocation.lng,
        }}>

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
apiKey: (process.env.GOOGLEKEY),
})(MapContainer);

