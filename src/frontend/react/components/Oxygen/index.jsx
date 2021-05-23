import React, { Component } from "react";
import _, { times } from "lodash";
import ReactCollapsible from "react-collapsible";
import { EditOxygen, OxygenForm } from "./EditOxygen";
import { getDate } from "../../utils/dateTime";
import { FaPlus } from "react-icons/fa";
import { CustomModal } from "../CustomModal";

export class OxygenListing extends Component {
  state = { leads: null, showNew: false };
  componentDidMount() {
    fetch("/oxygen").then(async (e) => {
      const leads = await e.json();
      console.log("leads ", leads);
      this.setState({ leads: _.sortBy(leads, "lastUpdated").reverse() });
    });
  }

  onsubmit(d, p) {
    const options = {
      method: "POST",
      body: JSON.stringify({ data: d, person: p }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    console.log("new oxygen lead ", d);
    fetch(`/oxygen`, options)
      .then(async (e) => {
        const m = await e.json();
        alert(JSON.stringify(m));
        window.location.reload();
      })
      .catch((e) => {
        alert(e.toString());
        window.location.reload();
      });
  }

  render() {
    const { leads, showModal } = this.state;
    const { person, isAuthorized } = this.props;
    return (
      <div>
        <div>
          {isAuthorized && person && (
            <CustomModal
              handleShow={() => {
                this.setState({ showModal: true });
              }}
              handleClose={() => {
                this.setState({ showModal: false });
              }}
              show={showModal}
              buttonName={"New"}
              headerTitle={"New Oxygen Lead"}
            >
              {showModal && (
                <OxygenForm
                  lead={{}}
                  onsubmit={this.onsubmit}
                  person={person}
                />
              )}
            </CustomModal>
          )}
        </div>
        <div>
          {leads &&
            leads.map((e) => (
              <div key={e._id}>
                <OxygenLeadRow
                  oxygenData={e}
                  person={person}
                  isAuthorized={isAuthorized}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

function OxygenLeadRow({ oxygenData, isAuthorized, person }) {
  const { name, address, contact, lastUpdated, updatedBy } = oxygenData;
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
              {`${name}, (${contact})`}
            </div>
          }
        >
          <div style={{ marginLeft: "10px" }}>
            <p>
              {`Address:- ${address}`}
              <br />
              {`LastUpdated:- ${getDate(lastUpdated)}`}
              <br />
              {`Verified By:- ${updatedBy}`}
            </p>
            <div>
              {isAuthorized && person && (
                <EditOxygen oxygenData={oxygenData} person={person} />
              )}
            </div>
          </div>
        </ReactCollapsible>
      </div>
    </div>
  );
}
