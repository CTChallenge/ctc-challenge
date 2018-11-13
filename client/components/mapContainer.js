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
    };
    this.onMarkerClick = this.onMarkerClick.bind(this)
  }

  componentDidMount(){

    // axios.get('https://data.ct.gov/resource/htz8-fxbk.json')
    // .then((res) => {
    //   console.log(res.data);
      
    // })

    
    // let locations = [];
    
    
    
    
      
    //do this if naloxone tab is active
    this.getPharmaciesRequest('https://data.ct.gov/resource/wvv7-dnrt.json')

    //do this if treatment centers tab is active
    this.getTreatmentCentersRequest("https://data.ct.gov/resource/htz8-fxbk.json")
    
    
    
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
      async formatTreatmentCenter() {
        res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + process.env.GOOGLEKEY)
        .then((res) => {
          return (res.data.results[0].geometry.location.lat);
        })
      }

        onMarkerClick(props, marker, e) {
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
          }
        });
        this.setState({pharmacies:locations})
      }

      async getTreatmentCentersRequest(url)  {
        const res = await axios.get(url);
        
        const locations = res.data.map((element) => {
          return {
             position: {
               lat: this.formatTreatmentCenter(),
               lng: 50
             },
             
           }
         });
         this.setState({treatmentCenters:locations})
       }

      
      createPharmacyMarkers() {
        let pharmacyMarkers = this.state.pharmacies.map(ele => {
          return <Marker position={ele.position} title={ele.title} onClick={this.onMarkerClick}></Marker>
        })
        // console.log(markers);
        return pharmacyMarkers;
      }

      createTreatmentCenterMarkers(){
        // console.log(this.state);
        
        // let createTreatmentCenterMarkers = this.state.treatmentCenters.map(ele => {
        //   return <Marker onClick={this.onMarkerClick}></Marker>
        // })
      }

      
      render() {
        let pharmaciesToDisplay;
        if(true){
          pharmaciesToDisplay = this.createPharmacyMarkers()
        }
        if(true){
          treatmentCentersToDisplay = this.createTreatmentCenterMarkers()
        }
        let treatmentCentersToDisplay;
        console.log(this.state);
        
        // console.log(locationsTomap);
        
    
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
        {treatmentCentersToDisplay}
        
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
