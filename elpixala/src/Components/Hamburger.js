import React from "react";
import { Link } from "react-router-dom";
export default function Hamburger() {
  return (
    <div className="hamburger">
      <div className="hamburger_links">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About Us</div>
        </Link>
        <Link to="team">
          <div>Our Team</div>
        </Link>
        <Link to="/career">
          <div>Career</div>
        </Link>
        <Link to="/contact">
          <div>Contact</div>
        </Link>
      </div>
    </div>
  );
}
