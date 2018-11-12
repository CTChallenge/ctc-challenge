import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios'

export class MapContainer extends Component {

  constructor() {
    super();
    
    //default to view whole state, re-render to current location when allow location access is selected by user
    this.state = {
      currentLocation: {
        lat: 41.701822,
        lng: -72.656391,
      },
      zoom: 9,
      markerPositions: []
    };
  }

  componentDidMount(){

    // axios.get('https://data.ct.gov/resource/wvv7-dnrt.json')
    // .then((res) => {
    //   res.data.forEach(element => {
    //     console.log(element.location_1.latitude);
        
    //   });
    // })
    // let locations = [];

    // let locations = res.data.map((element) => {
    //   return {
    //     position: {
    //       lat: element.location_1.latitude,
    //       lng: element.location_1.longitude
    //     }
    //   }
    // });


      
    
    this.getRequest('https://data.ct.gov/resource/wvv7-dnrt.json')
    
    
    
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;
        this.setState({
          currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude
                },
                zoom: 14,
              })
            })
          }
        }

       async getRequest (url)  {
        const response = await axios.get(url);
        this.setState({markerPositions:response.data})
      }


  render() {
    console.log(this.state);
    
    return (
      <Map google={this.props.google} zoom={this.state.zoom} 
        initialCenter={{
          lat: this.state.currentLocation.lat,
          lng: this.state.currentLocation.lng,
        }}
        center={{
          lat: this.state.currentLocation.lat,
          lng: this.state.currentLocation.lng,
        }}>

        {/* <Marker
          
          name="Current location"
        /> */}

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

