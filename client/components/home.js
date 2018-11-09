/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import axios from 'axios';

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
                <li className="active"	style="font-size:2.5vh;"><a href="">Home</a></li>
                <li style="font-size:2.5vh;"><a href="../overdoseGuide.html">What to do?</a></li>
                <li style="font-size:2.5vh;"><a href="../Data.html">Data</a></li>
              </ul>

              <ul className="EmergencyButton nav navbar-nav  navbar-right">
                <button type="button" className="btn btn-danger navbar-btn" href="#" style="font-size:2vh; margin-right:20px; color:black" data-toggle="modal" data-target="#myModal">
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
                <p style="font-size:16px">Assuming that you already know that the person has overdosed and they are showing the following signs:</p>
                  <ul>
                    <li>Blue or pale skin color</li>
                    <li>Small pupils</li>
                    <li>Low blood pressure</li>
                    <li>Slow heartbeat</li>
                    <li>Slow or shallow breathing</li>
                    <li>Gasping for breath</li>
                  </ul>
                  <br />
                  <span style="font-weight:bold; font-size:16px">Call 9-1-1 Immediately!!!</span><br />
							 <p>Give them a clear address and location for speedy assistance.
               </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <article>
          <p style="font-size:4.75vw; text-align:center;text-decoration: underline;">
						Challenge:  The Opiate Crisis
          </p>
          <p style="font-size :2.4vh; padding-left: 30px; text-indent:40px">
					 The opiate crisis is a national problem— but one that has hit Connecticut particularly hard.
				 The state, however, has a number of resources that are designed to help individuals and families
				 that are struggling with addiction.
          </p>
          <br />
          {/* <!-- Source : https://www.w3schools.com/html/html_responsive.asp --> */}
          <div className="container-fluid" style="border: 3px solid black; background-color: black; ">
            <div className="row">
              {/* <!-- Google Maps Section--> */}
              <div className="col-sm-7">
                {/* <!-- Buttons --> */}
                <div style="text-align:center; height:3vw">
                  <button style="color:DodgerBlue; font-size :2vw; font-weight :bold;">Naloxone</button>
                  <span style="padding-right: 0.75vw;" />
                  <button style="color:DodgerBlue; font-size :2vw; font-weight :bold;">Clinics</button>
                  <span style="padding-right: 0.75vw;" />
                  <button style="color:DodgerBlue; font-size :2vw; font-weight :bold;">Overdoses</button>
                </div>
                {/* <!-- Google Map Display --> */}
                  <div id="googleMap" style="width:40vw; height:40vw; overflow: hidden; margin-left:auto; margin-right:auto; border: 3px solid black;" />
              </div>

              <div className="col-sm-5 align-middle" style="border: 3px solid black; height:43vw; background-color: white; vertical-align: middle; margin:0">
                {/* <!-- Name of the Marker, Address and Hours --> */}
    <div className="align-middle" style="height: 25%; overflow-y : scroll; ">
    <p id="markerTitle" style="font-size:2.5vw; overflow: hidden; text-align:center; text-decoration: underline;">
								 St. Vincent
    </p>

      <p id="markerAddress" style="text-align:center; font-size:1.6vw">
    <b>Address:</b> 2800 Main St, Bridgeport, CT 06606
  </p>
  </div>

    {/* <!-- The Marker Info --> */}
    <p id="markerParagraph" style="font-size:1.55vw; text-indent:40px ; overflow-y : scroll; height: 75%; border-top: 1px solid black; " >
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
    {/* <!-- Setting the Location--> */}
    {/* <!--  */}
    <div className="col-sm-12" style="color:DodgerBlue; margin-left:auto;	 margin-right:auto;">
    <div style="float: left ; padding-right: 15px;  background-color: black;">
    <b>Street Address: </b>
    <input type="text" id="streetAddress" style="text-indent:3px ; background-color: #f1f1f1;" />
  </div>
    <div style="float: left; padding-right: 15px;  background-color: black; " >
    <b>City: </b>
    <input type="text" id="city" value="New Haven" style="text-indent:3px ; background-color: #f1f1f1;" />
  </div>
    <div style="float: left; padding-right: 5px; vertical-align: text-bottom; background-color: black;">
    <b style="padding-right: 5px;">State: Connecticut</b>
    <button>Get Location</button>
  </div>
  </div> -->

  </div>
  </div>

            <br />
            <br />


            <script src="mapButtons.js" type="text/javascript">
				 console.log("Started!");
  </script>

          </article>
      </div>
    );
  }
}
