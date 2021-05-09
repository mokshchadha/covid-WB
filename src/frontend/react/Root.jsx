import React, { Component } from "react";
import _ from "lodash";
import { HospitalListing } from "./components/HospitalListing/Listing";
import { RtpcrListing } from "./components/RtpcrListing/Listing";
import { About } from "./components/About/About";
import { Telemedicine } from "./components/TeleMedicine";
import { ContactUs } from "./components/ContactUs";
import { ImportantLinks } from "./components/ImportantLinks";
import { Ambulances } from "./components/Ambulances";
import {
  FaGoogle,
  FaHospital,
  FaPhoneAlt,
  FaClinicMedical,
  FaLink,
  FaAmbulance,
} from "react-icons/fa";
import { BsInfoCircleFill, BsFillPersonCheckFill } from "react-icons/bs";
import {
  initializePublicOauth,
  serverSideVerification,
} from "./utils/authorization";

import { Collapsible } from "react-materialize";

export class Root extends Component {
  state = { auth: "", isAuthorized: false, person: {} };
  componentDidMount() {
    initializePublicOauth().then((auth) => this.setState({ auth }));
  }

  async signIn() {
    const { auth } = this.state;
    await auth.signIn();
    const userProfile = auth.currentUser.get().getBasicProfile();
    const email = userProfile.getEmail();
    console.log("user Email ", email);
    try {
      const authorized = await serverSideVerification(email);
      const { data } = await authorized.json();
      if (!data?.email) throw "Non authorized email";
      if (data?.email) {
        alert("Success");
        this.setState({ isAuthorized: true, person: data });
      }
    } catch (error) {
      console.log(error);
      alert(`Sorry ${error}`);
    }
  }

  render() {
    const { auth, isAuthorized, person } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img
            src="https://i.ibb.co/XXZ0LyD/Whats-App-Image-2021-05-08-at-00-45-39.jpg"
            style={{ width: "380px", height: "170px" }}
          ></img>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginLeft: "0px", fontSize: "20px" }}>
              Purba Medinipur Covid Info
            </div>
            <div style={{ marginLeft: "70px", fontSize: "20px" }}>
              {auth && (
                <button
                  onClick={() => this.signIn()}
                  style={{ opacity: "0.2", height: "30px" }}
                >
                  <FaGoogle />
                </button>
              )}
            </div>
          </div>
          <div>
            <ul>
              <Collapsible>
                <li>
                  <div className="collapsible-header">
                    <FaAmbulance style={{ marginRight: "20px" }} />
                    CONTACT AMBULANCE
                  </div>
                  <div className="collapsible-body">
                    <Ambulances />
                  </div>
                </li>
              </Collapsible>
            </ul>
            <ul>
              <Collapsible>
                <li>
                  <div className="collapsible-header">
                    <BsFillPersonCheckFill style={{ marginRight: "20px" }} />
                    CONTACT US
                  </div>
                  <div className="collapsible-body">
                    <ContactUs />
                  </div>
                </li>
              </Collapsible>
            </ul>
            <ul>
              <Collapsible>
                <li>
                  <div className="collapsible-header">
                    <FaLink style={{ marginRight: "20px" }} />
                    VERIFIED OFFICIAL LINKS
                  </div>
                  <div className="collapsible-body">
                    <ImportantLinks />
                  </div>
                </li>
              </Collapsible>
            </ul>
            <ul>
              <Collapsible>
                <li>
                  <div className="collapsible-header">
                    <FaClinicMedical style={{ marginRight: "20px" }} />
                    RTPCR TEST CENTERS
                  </div>
                  <div className="collapsible-body">
                    <RtpcrListing isAuthorized={isAuthorized} person={person} />
                  </div>
                </li>
              </Collapsible>
            </ul>
            <ul>
              <Collapsible>
                <li>
                  <div className="collapsible-header">
                    <FaHospital style={{ marginRight: "20px" }} />
                    HOSPITALS NEAR YOU
                  </div>
                  <div className="collapsible-body">
                    <HospitalListing
                      isAuthorized={isAuthorized}
                      person={person}
                    />
                  </div>
                </li>
              </Collapsible>
            </ul>
            <ul>
              <Collapsible>
                <li>
                  <div className="collapsible-header">
                    <FaPhoneAlt style={{ marginRight: "20px" }} />
                    CONSULT A PROFESSIONAL
                  </div>
                  <div className="collapsible-body">
                    <Telemedicine />
                  </div>
                </li>
              </Collapsible>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: "50px" }}>
          <BsInfoCircleFill style={{ marginRight: "5px" }} />
          About Us <br /> We, the youth of Haldia have taken an initiative to
          volunteer and reach out to everyone who needs genuine help.
        </div>
      </div>
    );
  }
}

/*
      <ul>
            <Collapsible>
              <li>
                <div className="collapsible-header">
                  <BsInfoCircleFill style={{ marginRight: "20px" }} />
                  ABOUT
                </div>
                <div className="collapsible-body">
                  <About />
                </div>
              </li>
            </Collapsible>
          </ul>

          <div style={flexStyle}>
            <FaHospital />
            <div style={{ marginLeft: "10px" }}>
              <Collapsible
                trigger={
                  "Hospital Information---------------------------------"
                }
              >
                <div style={{ width: "300px" }}>
                  <HospitalListing
                    isAuthorized={isAuthorized}
                    person={person}
                  />
                </div>
              </Collapsible>
            </div>
            <BiCaretDown />
          </div>
        
*/
