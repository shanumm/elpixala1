import React, { useEffect } from "react";
import Typed from "typed.js";

export default function Members({ img, name }) {
  useEffect(() => {
    var options = {
      strings: ["", "CEO"],
      typeSpeed: 40,
      loop: false,
    };

    var typed = new Typed(".member_post", options);

    const member = document.querySelector(".member");
    member.addEventListener("mouseover", () => {
      console.log(member);
    });
  },[]);
  return (
    <div className="member">
      <div className="member_image">
        <img src={img} alt="" />
      </div>
      <div className="member_name">{name}</div>
    </div>
  );
}
