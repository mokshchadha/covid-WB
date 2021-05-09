import React, { Component } from "react";
import _ from "lodash";
import M from "materialize-css";
import { Collapsible } from "react-materialize";
import { EditListing } from "./EditListing";
import { TiTickOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { getDate } from "../../utils/dateTime";

export class HospitalListing extends Component {
  state = {
    hospitals: null,
    isAuthorized: false,
  };
  componentDidMount() {
    M.AutoInit();
    fetch("/data").then(async (e) => {
      const hospitals = await e.json();
      console.log(hospitals);
      this.setState({ hospitals });
    });
  }
  render() {
    const { hospitals } = this.state;
    const { isAuthorized, person } = this.props;
    return (
      <ul>
        {hospitals &&
          hospitals.map((e) => (
            <HospitalRow
              hospital={e}
              key={e.key}
              isAuthorized={isAuthorized}
              person={person}
            />
          ))}
      </ul>
    );
  }
}

function HospitalRow({ hospital, isAuthorized, person }) {
  const {
    name,
    totalBeds,
    availableBeds,
    availableO2,
    address,
    contact,
    lastUpdated,
    updatedBy,
    rtpcr,
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
            background: "#fffff",
            fontSize: "10px",
            padding: "5px",
          }}
        >
          <div style={{ lineHeight: "2em", width: "210px", padding: "5px" }}>
            <p style={{ textDecoration: "underline" }}>
              <b>{name}</b>
            </p>
          </div>
          <div style={{ lineHeight: "2em", width: "50px", padding: "5px" }}>
            <div>Beds</div>
            <div>
              <span
                style={{
                  background: availableBeds > 0 ? "#ccff90" : "#ff8a80",
                  fontSize: "15px",
                }}
              >
                {availableBeds}
              </span>
              {"/"}
              <span>{totalBeds}</span>
            </div>
          </div>
          <div style={{ lineHeight: "2em", width: "50px", padding: "5px" }}>
            <div>RTPCR</div>
            <div
              style={{
                fontSize: "15px",
              }}
            >
              {rtpcr ? (
                <TiTickOutline style={{ color: "#64dd17", fontSize: "30px" }} />
              ) : (
                <ImCross style={{ color: "#d50000" }} />
              )}
            </div>
          </div>
        </div>
        <div className="collapsible-body">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ fontSize: "12px" }}>
              <div>{`Updated ${getDate(lastUpdated)}`}</div>
              <div> {`Address:- ${address ? address : "N/A"}`}</div>
              <div> {`Contact:- ${contact ? contact : "N/A"}`}</div>
              <div
                style={{ fontSize: "10px" }}
              >{`Verified By ${updatedBy}`}</div>
            </div>
            <div style={{ marginLeft: "10px" }}>
              {isAuthorized && (
                <EditListing hospital={hospital} person={person} />
              )}
            </div>
          </div>
        </div>
      </li>
    </Collapsible>
  );
}
