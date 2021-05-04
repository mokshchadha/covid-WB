import React, { Component } from "react";
import _ from "lodash";
import M from "materialize-css";
import { Button, Modal } from "react-materialize";
import { CustomModal } from "./CustomModal";

export class EditListing extends Component {
  state = {
    showModal: false,
    selectedHospital: {},
  };

  componentDidMount() {
    const { hospital } = this.props;
    this.setState({ selectedHospital: hospital });
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
    console.log("submission Data in here ", d);
    fetch(`/data/${d._id}`, options)
      .then((e) => {
        if (e?.msg.includes("Error")) throw e;
        alert(e);
      })
      .catch((e) => {
        alert(e.toString());
        window.location.reload;
      });
  }

  render() {
    const { showModal, selectedHospital } = this.state;
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
          //disabled={}
        >
          {showModal && (
            <EditHospitalForm
              hospital={selectedHospital}
              onsubmit={(d) => this.onsubmit(d)}
            />
          )}
        </CustomModal>
      </div>
    );
  }
}

class EditHospitalForm extends Component {
  state = { hospital: {} };
  componentDidMount() {
    const { hospital } = this.props;
    this.setState({ hospital });
  }

  updateForm(val, key) {
    const { hospital } = this.state;
    if (key) this.setState({ hospital: { ...hospital, [key]: val } });
  }

  render() {
    const { hospital } = this.state;
    const { name, availableBeds, totalBeds, rtpcr } = hospital;
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
          <div style={{ paddingTop: "17px" }}>Beds</div>
          <div style={{ marginLeft: "20px" }}>
            <input
              type="number"
              value={availableBeds ?? ""}
              onChange={(e) => this.updateForm(e.target.value, "availableBeds")}
            ></input>
          </div>
        </div>
        <div style={flexOptions}>
          <div style={{ paddingTop: "17px" }}>RTPCR</div>
          <div>
            <input
              type="text"
              value={rtpcr}
              style={{ marginLeft: "20px" }}
              onChange={(e) => this.updateForm(e.target.value, "rtpcr")}
            ></input>
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <button onClick={() => this.props.onsubmit(this.state.hospital)}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
