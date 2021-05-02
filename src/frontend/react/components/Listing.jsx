import React, { Component } from "react";
import _ from "lodash";
import M from "materialize-css";
import { Collapsible } from "react-materialize";

export class Listing extends Component {
  state = {
    hospitals: [],
  };
  componentDidMount() {
    M.AutoInit();
    const res = fetch("/data").then(async (e) => {
      const hospitals = await e.json();
      console.log(hospitals);
      this.setState({ hospitals });
    });
  }
  render() {
    const { hospitals } = this.state;
    return (
      <ul>
        {hospitals.map((e) => (
          <HospitalRow hospital={e} key={e.key} />
        ))}
      </ul>
    );
  }
}

function HospitalRow({ hospital }) {
  const {
    name,
    totalBeds,
    availableBeds,
    availableO2,
    address,
    contact,
    lastUpdated,
    updatedBy,
  } = hospital;
  return (
    <Collapsible>
      <li>
        <div
          className="collapsible-header"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div>{name}</div>
          <div>{`Beds Available:- ${availableBeds}/${totalBeds}`}</div>
          <div>{`Available O2-cylinders:- ${availableO2}`}</div>
          <div></div>
        </div>
        <div className="collapsible-body">
          <div>{`Last Updated ${new Date(lastUpdated)}`}</div>
          <div> {`Address:- ${address ? address : "N/A"}`}</div>
          <div> {`Contact:- ${contact ? contact : "N/A"}`}</div>
          <div>{`Verified By ${updatedBy}`}</div>
        </div>
      </li>
    </Collapsible>
  );
}
