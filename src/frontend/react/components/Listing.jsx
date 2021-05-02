import React, { Component } from "react";
import _ from "lodash";
import M from "materialize-css";
import { Collapsible } from "react-materialize";

const getDate = (t) =>
  `${new Date(t).toLocaleTimeString()}, ${new Date(t).toLocaleDateString()}`;
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
  const styles = { lineHeight: "2em", width: "110px", padding: "10px" };
  return (
    <Collapsible>
      <li>
        <div
          className="collapsible-header"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            background: "#e0f7fa",
          }}
        >
          <div style={styles}>
            <p style={{ textDecoration: "underline" }}>
              <b>{name}</b>
            </p>
          </div>
          <div style={styles}>
            <div>Beds</div>
            <div>
              <span
                style={{
                  background: availableBeds > 0 ? "#ccff90" : "#ff8a80",
                  fontSize: "20px",
                }}
              >
                {availableBeds}
              </span>
              {"/"}
              <span>{totalBeds}</span>
            </div>
          </div>
          <div style={styles}>
            <div>O2 Cylinder</div>
            <div
              style={{
                fontSize: "20px",
              }}
            >
              {availableO2}
            </div>
          </div>
        </div>
        <div className="collapsible-body">
          <div>{`Last Updated ${getDate(lastUpdated)}`}</div>
          <div> {`Address:- ${address ? address : "N/A"}`}</div>
          <div> {`Contact:- ${contact ? contact : "N/A"}`}</div>
          <div>{`Verified By ${updatedBy}`}</div>
        </div>
      </li>
    </Collapsible>
  );
}
