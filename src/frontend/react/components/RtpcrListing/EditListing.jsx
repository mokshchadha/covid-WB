import React, { Component } from "react";
import _ from "lodash";
import { CustomModal } from "../CustomModal";

export class EditRtpcr extends Component {
  state = {
    showModal: false,
    selectedCenter: {},
  };

  componentDidMount() {
    const { rtpcrCenter } = this.props;
    this.setState({ selectedCenter: rtpcrCenter });
  }

  onsubmit(d) {
    const { person } = this.props;
    const options = {
      method: "POST",
      body: JSON.stringify({ data: d, person }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    console.log("rtpcr Data in here ", d);
    fetch(`/rtpcr/${d._id}`, options)
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
    const { showModal, selectedCenter } = this.state;
    console.log("selectex center ", selectedCenter);
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
            <EditRtpcrForm
              center={selectedCenter}
              onsubmit={(d) => this.onsubmit(d)}
            />
          )}
        </CustomModal>
      </div>
    );
  }
}

class EditRtpcrForm extends Component {
  state = { center: {} };
  componentDidMount() {
    const { center } = this.props;
    this.setState({ center });
  }

  updateForm(val, key) {
    const { center } = this.state;
    if (key) this.setState({ center: { ...center, [key]: val } });
  }

  render() {
    const { center } = this.state;
    const { name, address, contact } = center;
    const flexOptions = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "250px",
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
              value={address}
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
              value={contact}
              style={{ marginLeft: "20px" }}
              onChange={(e) => this.updateForm(e.target.value, "contact")}
            ></input>
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <button onClick={() => this.props.onsubmit(this.state.center)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
