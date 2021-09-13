import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sal from "sal.js";
import Logo2 from "../Images/logo2.png";
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
            <img className="logo2" src={Logo2} alt="" />
            </div>
          </div>
        </Link>
        <div className="nav-content">
          <li
            data-sal-duration="1200"
            data-sal="slide-down"
            data-sal-delay="300"
            data-sel-easing="ease-out-bounce"
            data-sal-repeat="true"
          >
            About Us
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
            <a href="#career">Career</a>
          </li>
          <li
            data-sal-duration="1200"
            data-sal="slide-down"
            data-sal-delay="600"
            data-sel-easing="ease-out-bounce"
            data-sal-repeat="true"
          >
            Contact
          </li>
        </div>
        <div className="nav_burger">
          <div className="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
