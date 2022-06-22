import React, { useEffect } from "react";
import Members from "./Members";
import "../Style/Team.css";
import Typed from "typed.js";
import sal from "sal.js";
import Nav from "./Nav";
import Nishant from "../Images/nishantnew.jpeg";
import Shruti from "../Images/shruti2.jpg";
import Krihya from "../Images/krishya.png";
import Jatin from "../Images/jatinnew.png";
import Ekta from "../Images/ekta.png";
import Kritika from "../Images/kritika.png";
import Pushkar from "../Images/pushkar.png";
import "../../node_modules/sal.js/dist/sal.css";
import Hamburger from "./Hamburger";
import Scrollbar from "smooth-scrollbar";
export default function Team() {
  useEffect(() => {
    sal();
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
    <div id="my-scrollbar" className="team_page">
      <div className="hamburger_icon" id="hamburgerIcon">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="burger_nav">
        <Hamburger />
      </div>
      <Nav />
      <div className="team_container">
        <div className="teamImageName">
          <div className="team_image">
            <img src={Nishant} alt="Nishant Tiwari" />
          </div>
          <div className="team_name">Nishant Tiwari</div>
          <div className="team_designation">Founder</div>
        </div>
        <div className="teamImageName">
          <div className="team_image">
            <img src={Shruti} alt="Shruti" />
          </div>
          <div className="team_name">Shruti Sharma</div>
          <div className="team_designation">Management officer</div>
        </div>
        <div className="teamImageName">
          <div className="team_image">
            <img src={Ekta} alt="ekta kaushik" />
          </div>
          <div className="team_name">Ekta Kaushik</div>
          <div className="team_designation">CTO</div>
        </div>
        <div className="teamImageName">
          <div className="team_image">
            <img src={Pushkar} alt="pushkar mishra" />
          </div>
          <div className="team_name">Pushkar Mishra</div>
          <div className="team_designation">CTO</div>
        </div>
       
        <div className="teamImageName">
          <div className="team_image">
            <img src={Kritika} alt="kritika jha" />
          </div>
          <div className="team_name">Kritika Jha</div>
          <div className="team_designation">Marketing officer</div>
        </div>
        <div className="teamImageName">
          <div className="team_image">
            <img src={Jatin} alt="Jatin Gupta" />
          </div>
          <div className="team_name">Jatin Gupta</div>
          <div className="team_designation">Lead graphic designer</div>
        </div>
        <div className="teamImageName">
          <div className="team_image">
            <img src={Krihya} alt="krishya" />
          </div>
          <div className="team_name">Krishya Gaba</div>
          <div className="team_designation">Lead Content Writer</div>
        </div>
      </div>
      <div style={{ color: "white" }} className="teamDescription">
        <div className="teamDescHeading">Welcome to elpixala</div>
        <div className="teamDescQuote">
          “elpixala is not just a brand…it’s a manifestation of our vision”
        </div>
        <div className="teamDescContent">
          The thought that “elpixala” made me express my passion through a
          digital medium. What began as a medium of expression, gradually saw a
          transformation, when I met like-minded people whom I call my family
          now. The journey of one became the journey of many and the collective
          strength brought us here. . I am forever grateful to all my team
          members for standing with me in this beautiful never-ending journey.
          We are committed to our art and strive to put our creative forces into
          our work. I cannot express enough gratitude to my parents who are and
          will always be a constant source of strength in all my endeavors.
        </div>
        <div className="teamDescName">Nishant Tiwari</div>
        <div className="teamDescDesignation">Founder and CEO</div>
      </div>
    </div>
  );
}
