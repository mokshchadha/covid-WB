import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import { Listing } from "./components/Listing";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Listing></Listing>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
