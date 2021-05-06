import React, { Component } from "react";
import _ from "lodash";
import M from "materialize-css";
import { HospitalListing } from "./components/HospitalListing/Listing";
import { RtpcrListing } from "./components/RtpcrListing/Listing";
import { About } from "./components/About/About";
import { MdLocalHospital } from "react-icons/md";
import {
  FaGoogle,
  FaHospital,
  FaPhoneAlt,
  FaClinicMedical,
} from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiCaretDown } from "react-icons/bi";
import {
  initializePublicOauth,
  serverSideVerification,
} from "./utils/authorization";
import Collapsible from "react-collapsible";

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
    const flexStyle = { margin: "20px", display: "flex", flexDirection: "row" };
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
        <div>
          <div style={flexStyle}>
            <FaClinicMedical />
            <div style={{ marginLeft: "10px" }}>
              <Collapsible
                trigger={"RTPCR Test Centers---------------------------"}
              >
                <div style={{ width: "300px" }}>
                  <RtpcrListing isAuthorized={isAuthorized} person={person} />
                </div>
              </Collapsible>
            </div>
            <BiCaretDown />
          </div>
          <div style={flexStyle}>
            <FaHospital />
            <div style={{ marginLeft: "10px" }}>
              <Collapsible
                trigger={"Hospital Information--------------------------"}
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
          <div style={flexStyle}>
            <FaPhoneAlt />
            <div style={{ marginLeft: "10px" }}>
              <Collapsible
                trigger={"Telemedicine helpline------------------------"}
              >
                <div style={{ width: "300px" }}>
                  <p>Data Pending, Come Back soon</p>
                </div>
              </Collapsible>
            </div>
            <BiCaretDown />
          </div>
          <div style={flexStyle}>
            <BsInfoCircleFill />
            <div style={{ marginLeft: "10px" }}>
              <Collapsible
                trigger={"About---------------------------------------------"}
              >
                <div style={{ width: "300px" }}>
                  <About />
                </div>
              </Collapsible>
            </div>
            <BiCaretDown />
          </div>
        </div>
      </div>
    );
  }
}
