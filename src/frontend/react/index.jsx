import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import { Listing } from "./components/Listing";
import { MdLocalHospital } from "react-icons/md";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginLeft: "10px", fontSize: "20px" }}>
          <MdLocalHospital />
        </div>
        <div style={{ marginLeft: "10px", fontSize: "20px" }}>
          Haldia Covid Info
        </div>
      </div>
      <div>
        <Listing />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
