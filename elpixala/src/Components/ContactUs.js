import React, { useEffect } from "react";
import { Linkedin } from "react-bootstrap-icons";
import "../Style/contact.css";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
export default function ContactUs() {
  useEffect(() => {
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const burgerNav = document.querySelector(".burger_nav");
    const hamburger_links = document.querySelector(".hamburger_links");

    console.log(hamburgerIcon.style.height);
    hamburgerIcon.addEventListener("click", () => {
      burgerNav.classList.toggle("burger_nav_active");
      hamburger_links.classList.toggle("hamburger_links_active");
    });
  });
  return (
    <div className="contactUs">
      <div className="hamburger_icon" id="hamburgerIcon">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="burger_nav">
        <Hamburger />
      </div>
      <Nav />
      <div className="contactContainer">
        <div className="contactContainerLeft">
          <div className="contactLeftHeading">Location</div>
          <div className="contactaddress">
            30/4, Pocket-12, Sector-82, Phase -2, <br /> Gautam Buddh Nagar
            Noida
          </div>
          <div
            className="contactLocation"
            style={{ borderRadius: "25px", overflow: "hidden" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14021.422123519827!2d77.38077862161772!3d28.529031521620297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8a31379b437%3A0xe3be0d3ada78691e!2sSector%2082%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1634919617068!5m2!1sen!2sin"
              width="400"
              height="250"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="contactContainerRight">
          <div>
            We're here <br /> Our door is always open for a good cup of coffee.
          </div>
          <form action="https://formspree.io/f/mbjqezjr" method="POST">
            <input name="name" type="text" placeholder="Name" />
            <input type="email" name="_replyto" placeholder="Email Address" />
            <input name="number" type="text" placeholder="Phone Number" />
            <textarea name="message" placeholder="Message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
