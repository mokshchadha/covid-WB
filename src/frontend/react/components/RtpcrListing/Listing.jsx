import React, { Component } from "react";
import _ from "lodash";
import { getDate } from "../../utils/dateTime";
import { EditRtpcr } from "./EditListing";
import { Collapsible } from "react-materialize";

export class RtpcrListing extends Component {
  state = {
    rtpcr: null,
    isAuthorized: false,
  };
  componentDidMount() {
    fetch("/rtpc").then(async (e) => {
      const rtpcr = await e.json();
      console.log("rtpcr ", rtpcr);
      this.setState({ rtpcr });
    });
  }
  render() {
    const { rtpcr } = this.state;
    const { isAuthorized, person } = this.props;
    return (
      <ul>
        {rtpcr &&
          rtpcr.map((e) => (
            <RtpcrRow
              rtpcrData={e}
              key={e._id}
              isAuthorized={isAuthorized}
              person={person}
            />
          ))}
      </ul>
    );
  }
}

function RtpcrRow({ rtpcrData, isAuthorized, person }) {
  const { name, address, contact, lastUpdated, updatedBy } = rtpcrData;
  return (
    <div>
      <div style={{ fontSize: "10px" }}>
        <Collapsible>
          <li>
            <div
              className="collapsible-header"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                background: "#ffffff",
                fontSize: "10px",
                padding: "0px",
                height: "10px",
              }}
            >
              <b style={{ marginBottom: "5px", paddingLeft: "15px" }}>{name}</b>
            </div>
            <div className="collapsible-body" style={{ padding: "7px 7px" }}>
              <p>
                {`Contact:- ${contact}`}
                <br />
                {`Address:- ${address}`}
                <br />
                {`LastUpdated:- ${getDate(lastUpdated)}`}
                <br />
                {`Verified By:- ${updatedBy}`}
              </p>
              <div>
                {isAuthorized && person && (
                  <EditRtpcr rtpcrCenter={rtpcrData} person={person} />
                )}
              </div>
            </div>
          </li>
        </Collapsible>
      </div>
    </div>
  );
}
