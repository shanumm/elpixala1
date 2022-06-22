import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-ser">
          <div style={{ display: "none" }} className="footer-service">
            <h1>Services</h1>
            <div className="footer-s">
              <div className="footer-service1">
                <h3>Strategy</h3>
                <h3>Brand Development</h3>
                <h3>Brand Workshop</h3>
                <h3>Brand Identify</h3>
                <h3>Logo Design</h3>
                <h3>Brand Guidelines</h3>
                <h3>Content Marketing</h3>
                <h3>SEO</h3>
                <h3>CRO</h3>
                <h3>Graphic Design</h3>
              </div>
              <div className="footer-service2">
                <h3>Copywriting</h3>
                <h3>Website Design</h3>
                <h3>Responsive Design</h3>
                <h3>Web Development</h3>
                <h3>API Integrations</h3>
                <h3>UX Design</h3>
                <h3>UI Design</h3>
                <h3>App Development</h3>
              </div>
            </div>
          </div>
          <div className="footer-company">
            <h1>Divisions</h1>
            <div className="footer-c">
              <h3>Elpixala</h3>
              <h3>Pixala Studio</h3>
              <h3>ODST</h3>
              <h3>Pixala Store</h3>
              <h3>Pixala Photography</h3>
              <h3>Pixala Tribe</h3>
            </div>
          </div>
          {/* <div className="footer-resources">
            <h1>Resources</h1>
            <div className="footer-r">
              <h3>Blog</h3>
              <h3>Glosssary</h3>
            </div>
          </div> */}
        </div>
        <div className="footer-business">
          <button style={{ color: "black" }}>Call</button>
          {/* <h1>New business</h1> */}
          <h2>Email : contact@elpixala.com</h2>
          <h4> </h4>
          <h4> </h4>
          <h5>
            30/4, Pocket-12, Sector-82, Phase -2, <br /> Gautam Buddh Nagar
            Noida
            <br />
            <br />
            201304
          </h5>
          <h6>9711324698</h6>
        </div>
      </div>
      <div className="footer-down">
        <h1>Privacy Policy</h1>
        <h2>Terms & Conditions</h2>
        <h4> © 2021 Elpixala.</h4>
      </div>
    </div>
  );
}
