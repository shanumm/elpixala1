import React from "react";
import "../Style/career.css";
export default function Career() {
  return (
    <div className="careerPage">
      <div className="careerContainer">
        <div className="careerHeading">Hiring Alert</div>
        <div className="careerDetails">
          If you think you have the skills and can justify any of the above
          roles what are you waiting for? Fill the attached form ASAP.
        </div>
        <div className="careerFields">
          <ul>
            <li>Graphic Design</li>
            <li>Web Development</li>
            <li>Digital Marketing</li>
          </ul>
          <div className="careerFormLink">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8YLOqblkwM-Q-jQ1MqI03YYWo2K0VTAuAQFoSl77drhzQhw/viewform"
            >
              <button>Submit Form</button>
            </a>
          </div>
        </div>
        <div className="careerPerks">
          <h2>Perks Offered</h2>
          <ul>
            <li>Offer Letter</li>
            <li>Completion Certificate</li>
            <li>Letter Of Recommendation</li>
            <li>
              Stipend
              <span style={{ marginLeft: "1rem" }}>
                (First three month will be considered as Incubation period.
                After that if you get selected for +3 month internship then that
                will be paid on a project basis)
              </span>
            </li>
            <li> Goodies and Swags</li>
          </ul>
        </div>
        <div className="careerNote">
          No domain or course restriction, anyone interested can fill the given
          form.
          <div>
            *Apply before 15th November 2021 and be a part of our team. *
          </div>
        </div>
      </div>
    </div>
  );
}
