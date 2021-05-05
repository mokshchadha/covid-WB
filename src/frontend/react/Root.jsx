import React, { Component } from "react";
import _ from "lodash";
import M from "materialize-css";
import { HospitalListing } from "./components/HospitalListing/Listing";
import { RtpcrListing } from "./components/RtpcrListing/Listing";
import { MdLocalHospital } from "react-icons/md";
import {
  FaGoogle,
  FaHospital,
  FaPhoneAlt,
  FaClinicMedical,
} from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  initializePublicOauth,
  serverSideVerification,
} from "./utils/authorization";
import { Collapsible } from "react-materialize";

export class Root extends Component {
  state = { auth: "", isAuthorized: false, person: {} };
  componentDidMount() {
    M.AutoInit();
    initializePublicOauth().then((auth) => this.setState({ auth }));
  }

  async signIn() {
    const { auth } = this.state;
    const resp = await auth.signIn();
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
    console.log("this.state.auth", this.state.auth);
    const { auth, isAuthorized, person } = this.state;
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginLeft: "10px", fontSize: "20px" }}>
            <MdLocalHospital />
          </div>
          <div style={{ marginLeft: "10px", fontSize: "20px" }}>
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
        <ul>
          <Collapsible>
            <li>
              <div className="collapsible-header">
                <FaClinicMedical />
                <b style={{ marginLeft: "20px" }}>RTPCR Test Centers</b>
              </div>
              <div className="collapsible-body">
                <RtpcrListing isAuthorized={isAuthorized} person={person} />
              </div>
            </li>
          </Collapsible>
          <Collapsible>
            <li>
              <div className="collapsible-header">
                <FaHospital />
                <b style={{ marginLeft: "20px" }}>Hospital's Information</b>
              </div>
              <div className="collapsible-body">
                <HospitalListing isAuthorized={isAuthorized} person={person} />
              </div>
            </li>
          </Collapsible>

          <Collapsible>
            <li>
              <div className="collapsible-header">
                <FaPhoneAlt />
                <b style={{ marginLeft: "20px" }}>Telemedicine helpline</b>
              </div>
              <div className="collapsible-body">{}</div>
            </li>
          </Collapsible>
          <Collapsible>
            <li>
              <div className="collapsible-header">
                <BsInfoCircleFill />
                <b style={{ marginLeft: "20px" }}>About</b>
              </div>
              <div className="collapsible-body">{}</div>
            </li>
          </Collapsible>
        </ul>
      </div>
    );
  }
}
