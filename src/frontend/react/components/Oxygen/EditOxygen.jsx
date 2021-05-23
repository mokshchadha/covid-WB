import React, { Component } from "react";
import _ from "lodash";
import { CustomModal } from "../CustomModal";
import { FaPlus } from "react-icons/fa";

export class EditOxygen extends Component {
  state = {
    showModal: false,
    lead: {},
  };

  componentDidMount() {
    const { oxygenData } = this.props;
    this.setState({ lead: oxygenData });
  }

  onsubmit(d, p) {
    const options = {
      method: "POST",
      body: JSON.stringify({ data: d, person: p }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    console.log("oxygen Data in here ", d);
    fetch(`/oxygen/${d._id}`, options)
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
    const { showModal, lead } = this.state;
    console.log("selectex O2 ", lead);
    return (
      <div>
        <CustomModal
          handleShow={() => {
            this.setState({ showModal: true });
          }}
          handleClose={() => {
            this.setState({ showModal: false });
          }}
          show={showModal}
          buttonName={"Edit"}
          headerTitle={"Edit"}
        >
          {showModal && (
            <OxygenForm
              lead={lead}
              onsubmit={this.onsubmit}
              person={this.props.person}
            />
          )}
        </CustomModal>
      </div>
    );
  }
}

export class OxygenForm extends Component {
  state = { lead: {} };
  componentDidMount() {
    const { lead } = this.props;
    this.setState({ lead });
  }

  updateForm(val, key) {
    const { lead } = this.state;
    if (key) this.setState({ lead: { ...lead, [key]: val } });
  }

  render() {
    const { lead } = this.state;
    const { name, address, contact } = lead;
    const flexOptions = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "250px",
      fontSize: "11px",
    };
    return (
      <div>
        <div style={flexOptions}>
          <div style={{ paddingTop: "17px" }}>Name</div>
          <div style={{ marginLeft: "20px" }}>
            <input
              type="text"
              value={name ?? ""}
              onChange={(e) => this.updateForm(e.target.value, "name")}
            ></input>
          </div>
        </div>
        <div style={flexOptions}>
          <div style={{ paddingTop: "17px" }}>Address</div>
          <div>
            <input
              type="text"
              value={address ?? ""}
              style={{ marginLeft: "20px" }}
              onChange={(e) => this.updateForm(e.target.value, "address")}
            ></input>
          </div>
        </div>
        <div style={flexOptions}>
          <div style={{ paddingTop: "17px" }}>Contact</div>
          <div>
            <input
              type="text"
              value={contact ?? ""}
              style={{ marginLeft: "20px" }}
              onChange={(e) => this.updateForm(e.target.value, "contact")}
            ></input>
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <button
            onClick={() =>
              this.props.onsubmit(this.state.lead, this.props.person)
            }
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
