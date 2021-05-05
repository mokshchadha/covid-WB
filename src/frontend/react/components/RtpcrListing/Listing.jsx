import React, { Component } from "react";
import _ from "lodash";
import M from "materialize-css";
import { getDate } from "../../utils/dateTime";
import { EditRtpcr } from "./EditListing";

export class RtpcrListing extends Component {
  state = {
    rtpcr: null,
    isAuthorized: false,
  };
  componentDidMount() {
    M.AutoInit();
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
  const styles = { lineHeight: "2em", width: "110px", padding: "10px" };
  return (
    <div>
      <p style={{ fontSize: "10px" }}>
        <b>{name}</b>
        <br />
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
      <hr />
    </div>
  );
}
