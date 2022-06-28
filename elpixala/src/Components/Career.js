import React from "react";
import "../Style/career.css";
export default function Career() {
  return (
    <div className="careerPage">
      <div className="careerContainer">
        <div className="careerHeading">Hiring Alert</div>
        <div className="careerDetails">
          We are glad to inform you that elPixala is hiring. We are looking
          interns for Business Development Associate. If you think you have the
          skills and can justify the above roles what are you waiting for?
        </div>
        <div className="careerFields">
          <ul>
            <li>Cold Emailing</li>
            <li>Cold Calling</li>
            <li>Collaboration</li>
            <li>Lead Generation</li>
            <li>Team Managament</li>
            <li>Maintaining Sheets</li>
          </ul>
          <div className="careerFormLink">
            <a target="_blank" href="https://forms.gle/dHUWnnfWVjmHB9pWA">
              <button>Submit Form</button>
            </a>
          </div>
        </div>
        <div className="careerPerks">
          <h2>Benifits</h2>
          <ul>
            <li>Offer Letter</li>
            <li>Completion Certificate</li>
            <li>Letter Of Recommendation</li>
            <li>Stipend Rs.2000 per month + Incentive upto Rs.10k</li>
            <li> Goodies and Swags</li>
          </ul>
        </div>
        <div className="careerNote">
          FILLING THE FORM IS COMPULSORY IN ORDER TO BE ELIGIBLE FOR THE
          INTERVIEW
          <div>For any query dm us!</div>
        </div>
      </div>
    </div>
  );
}
