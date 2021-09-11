import React from "react";

export default function Page3Content({ source, heading, desc, delay }) {
  return (
    <div
      data-sal-duration="1200"
      data-sal="fade"
      data-sal-delay={delay}
      data-sel-easing="ease-out-bounce"
      data-sal-repeat="true"
      className="contents"
    >
      <img className="content_image" src={source} alt="" />
      <div className="content_heading">{heading}</div>
      <div className="content_desc">{desc}</div>
    </div>
  );
}
