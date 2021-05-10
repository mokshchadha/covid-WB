import React from "react";
import { FaHospitalSymbol } from "react-icons/fa";
import { GoVerified } from "react-icons/go";

export function ImportantLinks() {
  return (
    <div>
      <div className="collection">
        <a href="https://www.cov19resources.cf/" className="collection-item">
          <GoVerified style={{ marginRight: "5px" }} />
          Verified Covid-19 Resources
        </a>
        <a
          href="https://excise.wb.gov.in/CHMS/Portal_Default.aspx"
          className="collection-item"
        >
          <p>
            <FaHospitalSymbol style={{ marginRight: "5px" }} />
            Govt. of West Bengal <br />
            Integrated Covid Management System (WB-ICMS)
          </p>
        </a>
        <a href="https://covidwb.com/" className="collection-item">
          <GoVerified style={{ marginRight: "5px" }} />
          Covid India WB Resources
        </a>
      </div>
    </div>
  );
}
