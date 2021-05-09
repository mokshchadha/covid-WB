import React, { Component } from "react";
import _ from "lodash";
import { getDate } from "../../utils/dateTime";
import { EditRtpcr } from "./EditListing";
import ReactCollapsible from "react-collapsible";

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
      <div>
        {rtpcr &&
          rtpcr.map((e) => (
            <RtpcrRow
              rtpcrData={e}
              key={e._id}
              isAuthorized={isAuthorized}
              person={person}
            />
          ))}
      </div>
    );
  }
}

function RtpcrRow({ rtpcrData, isAuthorized, person }) {
  const { name, address, contact, lastUpdated, updatedBy } = rtpcrData;
  return (
    <div>
      <div style={{ fontSize: "12px" }}>
        <ReactCollapsible
          trigger={
            <div
              style={{
                background: "white",
                margin: "2px",
                paddingLeft: "10px",
                paddingTop: "1px",
                paddingBottom: "1px",
              }}
            >
              {name}
            </div>
          }
        >
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
        </ReactCollapsible>
      </div>
    </div>
  );
}
