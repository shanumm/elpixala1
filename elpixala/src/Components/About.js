import React, { useEffect } from "react";
import "../Style/About.css";
import Scrollbar from "smooth-scrollbar";
import Nav from "./Nav";
import Hamburger from "./Hamburger";
export default function About() {
  useEffect(() => {
    var options = {
      damping: 0.05,
    };
    Scrollbar.init(document.querySelector("#my-scrollbar"), options);
  });
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
    <div id="my-scrollbar" className="aboutPage">
      <div className="hamburger_icon" id="hamburgerIcon">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="burger_nav">
        <Hamburger />
      </div>
      <Nav />
      <div className="aboutContainer">
        <div className="aboutHeading">About Us</div>
        <div className="aboutSubHeading">
          Envisioning, Kicking off from scratch, Nuts and bolts of creativity
          and last but not the least establishing businesses and getting the
          ball rolling.
        </div>
        <div className="aboutMainContent">
          An innovation lab where minds band together to answer questions once
          seen as impossible via radical creativity and hybrid technologies,
          designing online floors for brands and companies that will transmute
          our forthcoming. At ElPixala, we shape the future of businesses
          through design, crafts and curiosity.From app and website development,
          to graphic designing and logo making, we’ve got you covered. Our team
          of adroit artists and competent professionals, offer their skills and
          expertise to integrate internet based tools, designs and thereby
          develop a platform that connects brands to their audience in today’s
          world.
        </div>
      </div>
      <div className="missionAndVision">
        <div className="missionHeading">Team on a mission</div>
        <div className="missionSubHeading">
          Your idea, our execution. Your aim, our motto. Your suggestion, our
          direction.
        </div>
        <div className="missionContent">
          We rise by lifting others and we fall when we hold them back and stop
          them from reaching their full potential. Our sole objective is to put
          into action the digital intention of our client, to give reality to
          what they manifested about their brand and do justice to their
          concept. All of this at the most affordable and modest prices, in a
          cost-effective manner. We never have and never will sacrifice on the
          efficiency part of our business. Afterall, ElPixala is all about
          creativity and productivity and that's what we aim to advocate from
          here to eternity.
        </div>
      </div>
    </div>
  );
}
