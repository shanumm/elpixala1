import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sal from "sal.js";
import Logo2 from "../Images/logo2.png";
import NewLogo2 from "../Images/NewLogo1.png";
import NewLogo1 from "../Images/NewLogo2.png";
import LatestLogo1 from "../Images/LatestLogo1.png";
import LatestLogo2 from "../Images/LatestLogo2.png";
export default function Nav() {
  useEffect(() => {
    sal();
  });
  return (
    <div className="nav">
      <div className="nav-s">
        <Link to="/">
          <div className="nav-title">
            <div className="nav-title-a">
              <img className="logo2" src={NewLogo1} alt="elpixala logo" />
            </div>
          </div>
        </Link>
        <div className="nav-content">
          <li
            className="about_us_link"
            data-sal-duration="1200"
            data-sal="slide-down"
            data-sal-delay="200"
            data-sel-easing="ease-out-bounce"
            data-sal-repeat="true"
          >
            <Link
              style={{ border: "1px solid #f6ff00", padding: ".4rem 1rem" }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li
            className="about_us_link"
            data-sal-duration="1200"
            data-sal="slide-down"
            data-sal-delay="300"
            data-sel-easing="ease-out-bounce"
            data-sal-repeat="true"
          >
            <Link to="/about">About Us</Link>
          </li>
          <li
            data-sal-duration="1200"
            data-sal="slide-down"
            data-sal-delay="400"
            data-sel-easing="ease-out-bounce"
            data-sal-repeat="true"
          >
            <Link to="/team">Our Team</Link>
          </li>
          <li
            data-sal-duration="1200"
            data-sal="slide-down"
            data-sal-delay="500"
            data-sel-easing="ease-out-bounce"
            data-sal-repeat="true"
          >
            <Link to="/career">Career</Link>
          </li>
          <li
            data-sal-duration="1200"
            data-sal="slide-down"
            data-sal-delay="600"
            data-sel-easing="ease-out-bounce"
            data-sal-repeat="true"
          >
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </div>
    </div>
  );
}
