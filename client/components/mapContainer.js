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
      pharmacies: [],
      treatmentCenters: [],
      activeMarker: {},
      treatmentLL: [],
    };
    this.onMarkerClick = this.onMarkerClick.bind(this)
  }

  componentDidMount(){

    
      
    //do this if naloxone tab is active
    this.getPharmaciesRequest('https://data.ct.gov/resource/wvv7-dnrt.json')
    
    
    //if location services are enabled, zoom in to user's current location
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
     onMarkerClick(props, marker, e) {
		//  console.log(props);
		 document.getElementById("markerTitle").innerHTML = props.title;
		 
		 
      this.setState({
        activeMarker: marker,
      });
      
     }
     
     async getPharmaciesRequest(url)  {
       const res = await axios.get(url);
       const locations = res.data.map((element) => {
         return {
            position: {
              lat: element.location_1.latitude,
              lng: element.location_1.longitude
            },
            title: element.pharmacy_name,
            address: element.address,
            city: element.city,
            zip: element.zip,
            phone: element.phone,
            
          }
        });
        this.setState({pharmacies:locations})
      }

      async getTreatmentCentersRequest(url)  {
        const res = await axios.get(url);
        //  let treatmentLocations =  Promise.all(promises)
         this.setState({treatmentCenters:res.data})
       }

      
      createPharmacyMarkers() {
        let pharmacyMarkers = this.state.pharmacies.map(ele => {
          return <Marker 
          position={ele.position} 
          title={ele.title} 
          address={ele.address} 
          city={ele.city}
          zip={ele.zip}
          phone={ele.phone}
          onClick={this.onMarkerClick}
          >
          </Marker>
        })
        return pharmacyMarkers;
      }
      render() {
        let pharmaciesToDisplay = this.createPharmacyMarkers()

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

        {pharmaciesToDisplay}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
apiKey: (process.env.GOOGLEKEY),
})(MapContainer);
