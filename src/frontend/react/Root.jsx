import React, { Component } from "react";
import _ from "lodash";
import { Listing } from "./components/Listing";
import { MdLocalHospital } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import {
  initializePublicOauth,
  serverSideVerification,
} from "./utils/authorization";
import { Button } from "react-materialize";

export class Root extends React.Component {
  state = { auth: "", isAuthorized: false, person: {} };
  componentDidMount() {
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
        <div>
          <Listing isAuthorized={isAuthorized} person={person} />
        </div>
      </div>
    );
  }
}
