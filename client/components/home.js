/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import axios from 'axios';
import MapContainer from './mapContainer'
import {Button, Modal, Navbar, Nav, NavItem} from 'react-bootstrap';

export default class Home extends Component {
	 constructor() {
		 super();
		 this.handleShow = this.handleShow.bind(this);
		 this.handleClose = this.handleClose.bind(this);
		 this.state = {
			 show: false,
		 };
	 }

	 handleClose() {
		 this.setState({ show: false });
	 }

	 handleShow() {
		 this.setState({ show: true });
		 console.log("handleShow??");
	 }

	 componentDidMount() {
		 // axios.get('https://data.ct.gov/resource/deaths.json')
		 //.then((res) => {
		 // console.log(res.data);
		 // });
	 }

	 render() {
		 return (
			 <div>
			 
				 <Navbar inverse fixedTop fluid>
					 <Navbar.Header>
						 <Navbar.Brand>CT's Good Samaritan</Navbar.Brand>
					 <Navbar.Toggle />
					 </Navbar.Header>
					 <Navbar.Collapse>
						 <Nav>
							 <NavItem href="#">Home</NavItem>
							 <NavItem href="../overdoseGuide.html">What to do?</NavItem>
							 <NavItem href="../Data.html">Data</NavItem>
						 </Nav>
						 <Nav pullRight>
							 <NavItem>
								 <button id="emergency-top" type="button" className="btn btn-danger navbar-btn" href="#"  onClick={this.handleShow}>Overdose/Emergency</button>
							 </NavItem>
						 </Nav>
					 </Navbar.Collapse>
				 </Navbar>

				 <div>
					 <h4 id="description">If you or a loved one is struggling with opioid addiction, we want to help.<br />Check out the map below to find resources near you.</h4>
				 </div>

				 {/* <!-- Modal --> */}
				 <Modal show={this.state.show} onHide={this.handleClose}>
					 <div className="modal-dialog" role="document">
					
						 <Modal.Header>
							 <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							 <Modal.Title>Emergency Overdose Crisis</Modal.Title>
						 </Modal.Header>
						 <Modal.Body>
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
							 <span>Call <a href="tel:911"> 9-1-1 </a> Immediately!!!</span><br />
							 <p>Give them a clear address and location for speedy assistance. </p>
							 <br /><br />
							 <p className="modal-paragraph">After calling the Police...<br /></p>
							 <p>Wait with the person and perform basic CPR<br /></p>
							 <ul>
								 <li>Make sure there is nothing in the person's mouth that could block their breathing</li>
								 <li>Place one hand on the person's chin and tilt head back. Pinch his or her nose closed with the other hand</li>
								 <li>Administer 2 slow breaths and look for the person's chest to rise</li>
								 <li>Continue administering 1 breath every 5 seconds until the person starts breathing on his or her own</li>
								 <li>If the person is still unresponsive after repeating for 30 seconds, you can give them Naloxone</li>
							 </ul>
						 
							 <p>Naloxone can be administered two ways:</p>
							 <ol type="1">
								 <li>Into the Nose with an Intranasal Spray
									 <ul>
										 <li>Tilt the person's head back and provide support under the neck with one hand.</li>
										 <li>Insert the nozzle of the spray into the person's nose.</li>
										 <li>Press the plunger firmly to administer a dose of NARCAN Nasal Spray</li>
									 </ul>
								 </li>
								 <li>Into the muscle through Intramuscular Injection
									 <ul>
										 <li>Inject the Naloxone into the person's upper arm muscle (the deltoid). It is safe to inject through clothing.</li>
									 </ul>
								 </li>
							 </ol>
						 
						 </Modal.Body>
						 <Modal.Footer>
							 <button type="button" className="btn btn-default" onClick={this.handleClose}>Close</button>
						 </Modal.Footer>
					 </div>
				 </Modal>
				 <br />
				 {/* <!-- Source : https://www.w3schools.com/html/html_responsive.asp --> */}
				 <div id="main-content" className="container-fluid">
					 <div className="row">
					  {/* <!-- Google Maps Section--> */}
					  {/* <!--  <div className="col-sm-8"> --> */}
						 <div id="mapsContainer"  className="col-8">
							 {/* <!-- Buttons --> */}
							 <div id="button-container">
								 <button>Naloxone</button>
								 <span> </span>
								 <button>Treatment Centers</button>
							 </div>
							 <div id="googleMap">
								 <MapContainer />
							 </div>
							 {/* <!-- Google Map Display --> */}
						 </div>

						 {/* <!--  <div id="markerInfo" className="col-sm-5 align-right"> --> */}
						 <div id="markerInfo" className="col-4">
							 {/* <!-- Name of the Marker, Address and Hours --> */}
							 <p id="markerTitle"> Provider </p>
							 <p id="markerAddress"> </p>
							 <p id="markerPhone"> </p>
						 </div>
						 <button id="emergency" type="button" className="btn btn-danger btn-lg btn-block" href="#" data-toggle="modal" data-target="#myModal">
							 Emergency Overdose Crisis
						 </button>
					 </div>
				 </div>
			 </div>
		 );
	 }
}
