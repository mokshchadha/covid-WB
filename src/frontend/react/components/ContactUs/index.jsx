import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

export function ContactUs() {
  return (
    <div>
      <div className="collection">
        <a
          href="https://www.instagram.com/haldiacovidinfo/"
          className="collection-item"
        >
          <AiFillInstagram style={{ marginRight: "5px" }} /> @haldiacovidinfo
        </a>
        <a
          href="https://www.facebook.com/Bengal-Healers-107533494831277/"
          className="collection-item"
        >
          <AiFillFacebook style={{ marginRight: "5px" }} /> Bengal Healers
        </a>
        <div className="collection-item">
          <p>
            <strong>Members</strong>
          </p>
          <p>
            1. Pratyusha (9647244429)
            <br />
            2. Prithwiraj (7814967987)
            <br />
            3. Preetika (7063634795)
            <br />
            4. Sagnic (8972257249)
            <br />
            5. Srinjayee (9933980505)
            <br />
            6. Sanjana (9734844651)
            <br />
            7. Barsha (8016518175)
            <br />
            8. Soumyadeep (9932392897)
            <br />
            9. Ranadip (7031814202)
          </p>
        </div>
      </div>
    </div>
  );
}
