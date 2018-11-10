/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import axios from 'axios';
import MapContainer from './mapContainer'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    axios.get('https://data.ct.gov/resource/deaths.json')
      .then((res) => {
        console.log(res.data);
      });
  }


  render() {
    return (
      <div>
        <header>
          <h1 id="title">Connecticut's Good Samaritan</h1>
        </header>
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container-fluid">
            <div className="navbar-header">
              {/* <!-- <a href="../Data.html" style="font-size:2.5vh;color:red; margin-right:30px">Overdose Crisis</a> --> */}

              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                {/* <!-- Gives me the lines in the button--> */}
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              {/* <!--<a class="navbar-brand" href="#" id="demo">Username:</a>--> */}

            </div>

            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><a href="">Home</a></li>
                <li><a href="../overdoseGuide.html">What to do?</a></li>
                <li><a href="../Data.html">Data</a></li>
              </ul>

              <ul className="EmergencyButton nav navbar-nav  navbar-right">
                <button type="button" className="btn btn-danger navbar-btn" href="#" data-toggle="modal" data-target="#myModal">
							 Emergency Overdose Crisis
                </button>
              </ul>

            </div>
          </div>

        </nav>

        

        {/* <!-- Modal --> */}
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Emergency Overdose Crisis</h4>
              </div>
              <div className="modal-body">
                <p>Assuming that you already know that the person has overdosed and they are showing the following signs:</p>
                  <ul>
                    <li>Blue or pale skin color</li>
                    <li>Small pupils</li>
                    <li>Low blood pressure</li>
                    <li>Slow heartbeat</li>
                    <li>Slow or shallow breathing</li>
                    <li>Gasping for breath</li>
                  </ul>
                  <br />
                  <span>Call 9-1-1 Immediately!!!</span><br />
							 <p>Give them a clear address and location for speedy assistance.
               </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
          <p id="title">
						Challenge:  The Opiate Crisis
          </p>
          <p id="info">
					 The opiate crisis is a national problem— but one that has hit Connecticut particularly hard.
				 The state, however, has a number of resources that are designed to help individuals and families
				 that are struggling with addiction.
          </p>
          <br />
          {/* <!-- Source : https://www.w3schools.com/html/html_responsive.asp --> */}
          <div className="container-fluid">
            <div className="row">
              {/* <!-- Google Maps Section--> */}
              <div className="col-sm-7">
                {/* <!-- Buttons --> */}
                <div id="button-container">
                  <button>Naloxone</button>
                  <button >Clinics</button>
                  <button>Overdoses</button>
                </div>
                <div id="googleMap">
                <MapContainer />
                </div>
                {/* <!-- Google Map Display --> */}
              </div>

              <div className="col-sm-5 align-right">
                {/* <!-- Name of the Marker, Address and Hours --> */}
                <div className="align-middle">
                  <p id="markerTitle">
								 St. Vincent
    </p>

      <p id="markerAddress">
    <b>Address:</b> 2800 Main St, Bridgeport, CT 06606
  </p>
  </div>

    {/* <!-- The Marker Info --> */}
    <p id="markerParagraph">
							 Your team is charged with creating an application that provides useful information to families and
							 addicts in an integrated form.  For example, an application might provide an integrated geolocation
							 based display of treatment resources available— or perhaps directions to the nearest Pharmacy
							 equipped to distribute Naloxone. The specific content you choose to display in your app, and the
							 manner in which you display the content to the user is up to you and your team. <br /><br />

							 Jason Adding text  just to make sure that the scroll bar is working perfectly fine. Added a bit more
							 text....... then a bit	 more.... then Jason added a lot more text just to ensure that everything was working
							 fine. And eventually he added so much text that the text field scroll bar became the size of an ant....
      <br /> <br />
							 Unfortunately he was still not satisfied and continue to add more and more text. And This is why this
							 paragraph is ridiculously long. Just so that Jason could efficiently test out the scroll bar feature and make
							 sure it doesn't affect the layout. Yup.... that's the reason. Thank you for reading.
    </p>

              </div>

  </div>
  </div>

            <br />
            <br />


      </div>
    );
  }
}
