import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import { Collapsible } from "react-materialize";

export class Listing extends Component {
  state = {
    hospitals: [],
  };
  componentDidMount() {
    const res = fetch("/data").then(async (e) => {
      const hospitals = await e.json();
      this.setState({ hospitals });
    });
    console.log(res.json);
  }
  render() {
    const { hospitals } = this.state;
    return (
      <div>
        {hospitals.map((e) => (
          <HospitalRow hospital={e} />
        ))}
      </div>
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
        <div className="collapsible-header">{<div></div>}</div>
        <div className="collapsible-body">
          <div>
            <span>{`Last Updated ${new Date(lastUpdated)}`}</span>
          </div>
          <span>{`Address ${address}`}</span>
          <span>{`Edited By ${updatedBy}`}</span>
        </div>
      </li>
    </Collapsible>
  );
}
